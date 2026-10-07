import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, User, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";
import { useId, useState } from "react";
import { requestCallSchema, type RequestCallFormData } from "@/lib/requestCallSchema";
import { Link } from "react-router-dom";


// Public Web3Forms access key (safe to ship client-side). Submissions are emailed to the address it was created with.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const areas = [
    "Ringwood",
    "Bournemouth",
    "Christchurch",
    "Furlong",
    "New Milton",
    "Verwood",
    "Ferndown",
    "Wimborne",
    "Poole",
    "Other",
];

interface RequestCallFormProps {
    compact?: boolean;
}

const RequestCallForm = ({ compact = false }: RequestCallFormProps) => {
    const [submitted, setSubmitted] = useState(false);
    const [sendError, setSendError] = useState(false);
    const uid = useId();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RequestCallFormData>({
        resolver: zodResolver(requestCallSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            area: "",
            message: "",
            botcheck: "",
        },
    });

    const onSubmit = async (data: RequestCallFormData) => {
        setSendError(false);

        if (!WEB3FORMS_KEY) {
            console.error("VITE_WEB3FORMS_KEY is not set — form cannot send.");
            setSendError(true);
            return;
        }

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `New call-back request from ${data.name}`,
                    from_name: "Ringo's Taxis Website",
                    botcheck: data.botcheck,
                    name: data.name,
                    email: data.email || "Not given",
                    phone: data.phone || "Not given",
                    area: data.area || "Not given",
                    message: data.message || "",
                    page: window.location.pathname,
                }),
            });
            const json = await res.json();
            if (!res.ok || !json.success) throw new Error(json.message || "Send failed");

            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                reset();
            }, 5000);
        } catch (err) {
            console.error("Request a Call submission failed:", err);
            setSendError(true);
        }
    };

    if (submitted) {
        return (
            <div className={`bg-white yp-border-thick p-6 sm:p-8 text-center ${compact ? "" : "max-w-xl mx-auto"}`}>
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-yp-dark mb-2">
                    Thank You!
                </h3>
                <p className="text-yp-dark/70 font-heading text-sm">
                    We'll get back to you shortly. In the meantime, you can call us directly:
                </p>
                <a
                    href="tel:07387777202"
                    className="inline-flex items-center gap-2 mt-4 bg-yp-dark text-white px-6 py-3 font-heading font-bold tracking-wider hover:bg-black transition-colors"
                >
                    <Phone className="w-4 h-4" />
                    07387 777202
                </a>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`bg-white yp-border-thick ${compact ? "p-4 sm:p-6" : "p-6 sm:p-8 max-w-xl mx-auto"}`}
        >
            <div className="space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor={`${uid}-name`} className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                        <User className="w-3.5 h-3.5" />
                        Your Name *
                    </label>
                    <input
                        id={`${uid}-name`}
                        {...register("name")}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30"
                    />
                    {errors.name && (
                        <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor={`${uid}-email`} className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        Email Address
                    </label>
                    <input
                        id={`${uid}-email`}
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30"
                    />
                    {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor={`${uid}-phone`} className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        Phone Number
                    </label>
                    <input
                        id={`${uid}-phone`}
                        {...register("phone")}
                        type="tel"
                        placeholder="07xxx xxxxxx"
                        className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30"
                    />
                    {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                    <p className="text-[10px] text-yp-dark/50 mt-1 font-heading">
                        * Please provide either an email or phone number
                    </p>
                </div>

                {/* Area */}
                <div>
                    <label htmlFor={`${uid}-area`} className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        Your Area
                    </label>
                    <select
                        id={`${uid}-area`}
                        {...register("area")}
                        className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30 appearance-none cursor-pointer"
                    >
                        <option value="">Select your area</option>
                        {areas.map((area) => (
                            <option key={area} value={area}>
                                {area}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                {!compact && (
                    <div>
                        <label htmlFor={`${uid}-message`} className="flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-yp-dark uppercase mb-1.5">
                            <MessageSquare className="w-3.5 h-3.5" />
                            Message (Optional)
                        </label>
                        <textarea
                            id={`${uid}-message`}
                            {...register("message")}
                            rows={3}
                            placeholder="Tell us about your journey..."
                            className="w-full border-2 border-yp-dark/20 px-4 py-2.5 text-sm font-heading outline-none focus:border-yp-gold transition-colors bg-yp-cream/30 resize-none"
                        />
                    </div>
                )}

                {/* Honeypot (hidden from users) */}
                <input
                    {...register("botcheck")}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                />

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-yp-dark text-white font-heading font-bold text-sm tracking-[0.15em] uppercase py-3.5 hover:bg-black transition-colors mt-2 disabled:opacity-60 disabled:cursor-wait"
                >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Request a Call Back"}
                </button>

                <p className="text-[10px] text-yp-dark/50 text-center font-heading">
                    We only use your details to contact you about your journey.{" "}
                    <Link to="/privacy" className="underline">Privacy policy</Link>
                </p>

                {sendError && (
                    <p role="alert" className="text-sm text-red-600 text-center font-heading">
                        Sorry, your request couldn't be sent. Please call us on{" "}
                        <a href="tel:07387777202" className="font-bold underline">07387 777202</a>.
                    </p>
                )}
            </div>
        </form>
    );
};

export default RequestCallForm;
