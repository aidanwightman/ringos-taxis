import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import YellowPagesLayout from "@/components/YellowPagesLayout";
import RequestCallForm from "@/components/RequestCallForm";
import { usePageSEO } from "@/hooks/usePageSEO";

const serviceAreas = [
    { name: "Ringwood", desc: "Our home base — fast response times and local knowledge you can trust.", primary: true },
    { name: "Bournemouth", desc: "Full coverage across Bournemouth town centre, seafront, and suburbs.", primary: true },
    { name: "Christchurch", desc: "Serving Christchurch and Highcliffe for local and long-distance journeys.", primary: true },
    { name: "Ferndown", desc: "Reliable taxi service covering the Ferndown area and surroundings.", primary: true },
    { name: "New Milton", desc: "Quick pickups and drop-offs throughout New Milton and Barton-on-Sea.", primary: false },
    { name: "Verwood", desc: "Covering Verwood, Three Legged Cross, and surrounding villages.", primary: false },
    { name: "Ferndown", desc: "Serving Ferndown, West Moors, and the Dorset heathlands area.", primary: false },
    { name: "Wimborne", desc: "Taxi service across Wimborne Minster and neighbouring areas.", primary: false },
    { name: "Poole", desc: "Covering Poole, Canford Cliffs, and Sandbanks for all journeys.", primary: false },
    { name: "Fordingbridge", desc: "Serving Fordingbridge and the wider Avon Valley area.", primary: false },
    { name: "Lymington", desc: "Taxi transfers to and from Lymington, including ferry connections.", primary: false },
    { name: "Wareham", desc: "Covering Wareham, Corfe Castle, and the wider Purbeck area.", primary: false },
];

const ServiceAreas = () => {
    usePageSEO({
        title: "Ringwood Taxi | Bournemouth Taxi | Christchurch Cabs | Ringo's Taxis",
        description: "Need a Ringwood Taxi or Bournemouth Taxi? We cover Ringwood, Bournemouth, Christchurch, Furlong, and all surrounding areas. Reliable 24/7 service.",
    });

    return (
        <YellowPagesLayout
            title="Service Areas"
            description="Our trusted local taxi service covers Ringwood, Bournemouth, Christchurch, and all surrounding areas in South UK."
        >
            {/* Map section */}
            <section className="bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {/* Map embed */}
                        <div className="yp-border-thick overflow-hidden h-[300px] sm:h-[400px] lg:h-full min-h-[300px]">
                            <iframe
                                title="Ringo's Taxis service area map"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-2.05%2C50.65%2C-1.55%2C50.95&layer=mapnik&marker=50.8467%2C-1.7878"
                                className="w-full h-full border-0"
                                loading="lazy"
                            />
                        </div>

                        {/* Areas intro */}
                        <div>
                            <span className="inline-block font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase text-yp-gold font-bold mb-2 sm:mb-3">
                                Where We Operate
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark mb-4 sm:mb-6">
                                Serving <span className="text-yp-gold">South UK</span><br />
                                Door-to-Door
                            </h2>
                            <p className="text-sm sm:text-base text-yp-dark/70 leading-relaxed mb-6">
                                Based in Ringwood, Hampshire, we cover a wide area across Dorset, Hampshire,
                                and Wiltshire. From quick local trips to airport transfers and long-distance
                                journeys — wherever you need to go, we'll get you there.
                            </p>

                            {/* Primary areas highlight */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {serviceAreas.filter(a => a.primary).map(({ name }) => (
                                    <div key={name} className="flex items-center gap-2 bg-yp-yellow/20 px-3 py-2 border border-yp-yellow/40">
                                        <MapPin className="w-4 h-4 text-yp-gold shrink-0" />
                                        <span className="text-sm font-heading font-bold text-yp-dark">{name}</span>
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

            {/* All areas directory */}
            <section className="py-12 sm:py-16 bg-yp-cream">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark">
                            Full Service Directory
                        </h2>
                        <p className="text-sm text-yp-dark/60 mt-2 font-heading">
                            A–Z of areas we cover throughout South UK
                        </p>
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <div className="h-px w-12 bg-yp-dark/20" />
                            <div className="w-2 h-2 bg-yp-yellow rotate-45" />
                            <div className="h-px w-12 bg-yp-dark/20" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {serviceAreas.map(({ name, desc, primary }) => (
                            <div
                                key={name}
                                className={`bg-white p-5 sm:p-6 border-l-4 hover:shadow-md transition-shadow ${primary ? "border-l-yp-yellow yp-border-thick" : "border-l-yp-dark/20 border border-yp-dark/10"
                                    }`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className={`w-4 h-4 ${primary ? "text-yp-gold" : "text-yp-dark/40"}`} />
                                    <h3 className="font-display text-base sm:text-lg font-bold text-yp-dark">{name}</h3>
                                    {primary && (
                                        <span className="ml-auto text-[9px] sm:text-[10px] font-heading font-bold tracking-wider text-yp-gold uppercase bg-yp-yellow/20 px-2 py-0.5">
                                            Core Area
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs sm:text-sm text-yp-dark/60 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Request a call section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                        <div>
                            <span className="inline-block font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase text-yp-gold font-bold mb-2 sm:mb-3">
                                Get In Touch
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark mb-4 sm:mb-6">
                                Request a Call Back
                            </h2>
                            <p className="text-sm sm:text-base text-yp-dark/70 leading-relaxed mb-6">
                                Not sure about your route or need a quote? Fill in the form and we'll
                                call you back at a time that suits you. Or call us directly — we're always happy to help.
                            </p>
                            <div className="bg-yp-cream yp-border-dashed p-5 sm:p-6 mb-6">
                                <p className="font-heading font-bold text-sm text-yp-dark tracking-wider mb-1">
                                    PREFER TO CALL?
                                </p>
                                <a
                                    href="tel:07387777202"
                                    className="inline-flex items-center gap-2 text-yp-dark hover:text-yp-gold transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="phone-banner text-xl sm:text-2xl">07387 777202</span>
                                </a>
                            </div>
                            <Link
                                to="/request-a-call"
                                className="inline-flex items-center gap-2 text-sm font-heading font-bold text-yp-dark tracking-wider hover:text-yp-gold transition-colors"
                            >
                                Or visit our full contact page <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <RequestCallForm />
                    </div>
                </div>
            </section>
        </YellowPagesLayout>
    );
};

export default ServiceAreas;
