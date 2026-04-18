import { Accessibility, Phone, CheckCircle, ArrowRight, Shield, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import YellowPagesLayout from "@/components/YellowPagesLayout";
import { usePageSEO } from "@/hooks/usePageSEO";

const features = [
    {
        icon: Accessibility,
        title: "Wheelchair Accessible",
        desc: "Our vehicles are fitted with ramps and secure wheelchair fastening points, ensuring safe and comfortable travel for wheelchair users.",
    },
    {
        icon: Shield,
        title: "Fully Trained Drivers",
        desc: "All our drivers are trained in disability awareness and passenger assistance, providing a professional and empathetic service.",
    },
    {
        icon: Heart,
        title: "Door-to-Door Service",
        desc: "We provide full door-to-door assistance, helping passengers from their front door to their destination safely.",
    },
    {
        icon: Users,
        title: "Carer Accompaniment",
        desc: "Carers and companions travel free of charge — we understand that support is essential for many of our passengers.",
    },
];

const DisabledAccess = () => {
    usePageSEO({
        title: "Wheelchair Accessible Taxi Ringwood | WAV & Disabled Transport — Ringo's Taxis",
        description: "WAV taxi service in Ringwood & New Forest. Wheelchair accessible vehicles, disabled transport, and mobility taxis across Hampshire & Dorset. Call 07387 777202.",
    });

    return (
        <YellowPagesLayout>
            {/* Hero image section */}
            <section className="bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Image */}
                        <div className="yp-border-thick overflow-hidden">
                            <img
                                src="/disabled-access.jpeg"
                                alt="Wheelchair accessible taxi with ramp extended for boarding"
                                className="w-full h-64 sm:h-72 md:h-80 object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <span className="inline-block font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase text-yp-gold font-bold mb-2 sm:mb-3">
                                WAV & Disabled Transport Ringwood
                            </span>
                            <h1 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark mb-4 sm:mb-6">
                                Wheelchair Accessible Taxi<br />
                                <span className="text-yp-gold">Ringwood & New Forest</span>
                            </h1>
                            <p className="text-sm sm:text-base text-yp-dark/70 leading-relaxed mb-6">
                                Ringo's Taxis operates fully wheelchair accessible vehicles (WAV) across Ringwood, the New Forest, Bournemouth, and Dorset. Our adapted taxis feature hydraulic ramps, secure wheelchair fastening points, and spacious interiors — so every passenger travels safely and with dignity.
                            </p>
                            <div className="space-y-3 mb-6 sm:mb-8">
                                {["Hydraulic wheelchair ramps", "Secure wheelchair fastening", "Spacious interior", "Professional, trained drivers"].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0" />
                                        <span className="text-sm text-yp-dark/80 font-heading">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <a
                                href="tel:07387777202"
                                className="inline-flex items-center gap-3 bg-yp-dark text-white px-6 sm:px-8 py-3 sm:py-4 font-heading font-bold tracking-wider hover:bg-black transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="phone-banner text-lg sm:text-xl">07387 777202</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WAV / Disabled transport info */}
            <section className="py-10 sm:py-14 bg-white border-t border-yp-dark/10">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark mb-4">
                            WAV Taxi & Disabled Transport — Ringwood, New Forest & Dorset
                        </h2>
                        <p className="text-sm sm:text-base text-yp-dark/70 leading-relaxed mb-4">
                            Whether you need a <strong>WAV taxi in Ringwood</strong>, a <strong>wheelchair accessible vehicle in the New Forest</strong>, or <strong>disabled transport across Dorset and Hampshire</strong>, Ringo's Taxis is here to help. We provide mobility taxis for passengers with disabilities, including those who use manual or powered wheelchairs, mobility scooters, and walking frames.
                        </p>
                        <p className="text-sm sm:text-base text-yp-dark/70 leading-relaxed mb-4">
                            Our <strong>accessible taxi service</strong> covers Ringwood, Fordingbridge, Verwood, Ferndown, Wimborne, Christchurch, New Milton, Lyndhurst, Lymington, Brockenhurst, and all surrounding areas. We also provide <strong>accessible airport transfers</strong> to Bournemouth Airport, Southampton Airport, Heathrow, and Gatwick — with full ramp access and wheelchair securing throughout.
                        </p>
                        <p className="text-sm sm:text-base text-yp-dark/70 leading-relaxed">
                            Carers and companions always travel free of charge. All drivers are disability-awareness trained. Call <strong>07387 777202</strong> to book your <strong>wheelchair friendly taxi</strong> — available 24/7.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features grid */}
            <section className="py-12 sm:py-16 bg-yp-cream">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark">
                            Our Accessibility Features
                        </h2>
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <div className="h-px w-12 bg-yp-dark/20" />
                            <div className="w-2 h-2 bg-yp-yellow rotate-45" />
                            <div className="h-px w-12 bg-yp-dark/20" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {features.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-white yp-border-thick p-6 sm:p-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-yp-yellow p-3 shrink-0">
                                        <Icon className="w-6 h-6 text-yp-dark" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-yp-dark mb-2">{title}</h3>
                                        <p className="text-sm text-yp-dark/60 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-10 sm:py-14 bg-yp-dark text-center">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                        Book a Wheelchair Accessible Taxi
                    </h2>
                    <p className="text-sm sm:text-base text-white/60 mb-6 sm:mb-8 max-w-md mx-auto">
                        Call now or request a callback to book your WAV taxi, disabled transport, or accessible airport transfer. Available 24/7 across Ringwood, New Forest &amp; Dorset.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:07387777202"
                            className="flex items-center gap-3 bg-yp-yellow text-yp-dark px-6 sm:px-8 py-3 sm:py-4 font-heading font-bold tracking-wider hover:bg-white transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span className="phone-banner text-lg sm:text-xl">07387 777202</span>
                        </a>
                        <Link
                            to="/request-a-call"
                            className="flex items-center gap-2 border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 font-heading font-bold text-sm tracking-wider hover:border-yp-yellow hover:text-yp-yellow transition-colors"
                        >
                            Request a Call <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </YellowPagesLayout>
    );
};

export default DisabledAccess;
