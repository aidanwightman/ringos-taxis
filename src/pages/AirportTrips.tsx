import { Plane, Phone, Clock, MapPin, ArrowRight, CheckCircle, Shield } from "lucide-react";

import { Link } from "react-router-dom";
import YellowPagesLayout from "@/components/YellowPagesLayout";
import { usePageSEO } from "@/hooks/usePageSEO";

const airports = [
    {
        name: "Bournemouth Airport",
        code: "BOH",
        distance: "~25 mins from Ringwood",
        desc: "The closest airport to our base. Quick, reliable transfers for domestic and European flights.",
        route: "/ringwood-to-bournemouth-airport-taxi",
    },
    {
        name: "Southampton Airport",
        code: "SOU",
        distance: "~45 mins from Ringwood",
        desc: "Popular for domestic flights and short-haul European destinations. Stress-free door-to-door service.",
        route: "/ringwood-to-southampton-airport-taxi",
    },
    {
        name: "Heathrow Airport",
        code: "LHR",
        distance: "~1 hr 45 mins from Ringwood",
        desc: "London's busiest airport. We offer competitive rates and ensure you arrive with plenty of time.",
        route: "/ringwood-to-heathrow-taxi",
    },
    {
        name: "Gatwick Airport",
        code: "LGW",
        distance: "~2 hrs from Ringwood",
        desc: "South London's major hub. Pre-book your transfer and relax — we'll handle the journey.",
        route: "/ringwood-to-gatwick-taxi",
    },
];

const benefits = [
    { icon: Clock, text: "Flight monitoring — we track delays so you don't wait" },
    { icon: Shield, text: "Fixed prices — no meter, no surprises" },
    { icon: MapPin, text: "Meet & greet at arrivals" },
    { icon: CheckCircle, text: "Early morning & late night availability" },
    { icon: Plane, text: "All major UK airports covered" },
    { icon: Phone, text: "24/7 booking line" },
];

const AirportTrips = () => {
    usePageSEO({
        title: "Bournemouth Airport Taxi | Heathrow & Gatwick Transfers | Ringo's Taxis",
        description: "Best Bournemouth airport taxi service. We provide fixed-price airport transfers from Ringwood, Bournemouth, and Christchurch to all major UK airports.",
    });

    return (
        <YellowPagesLayout>
            {/* Hero with image */}
            <section className="bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Image */}
                        <div className="yp-border-thick overflow-hidden">
                            <img
                                src="/terminal-3.jpeg"
                                alt="Taxi outside airport terminal ready for transfer"
                                className="w-full h-64 sm:h-72 md:h-80 object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <span className="inline-block font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase text-yp-gold font-bold mb-2 sm:mb-3">
                                Bournemouth Airport Taxis
                            </span>
                            <h1 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark mb-4 sm:mb-6">
                                Reliable <span className="text-yp-gold">Airport Taxi</span> Transfers<br />
                                From Ringwood & South UK
                            </h1>
                            <p className="text-sm sm:text-base text-yp-dark/70 leading-relaxed mb-6">
                                Whether it's a 5am flight from Bournemouth Airport or a midnight landing at Heathrow, our Ringwood taxi service gets you there on time — every time. We monitor your flight, so if there's a delay, we adjust. Fixed prices, no meter surprises, and a comfortable ride door-to-door.
                            </p>
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

            {/* Benefits strip */}
            <section className="py-8 sm:py-10 bg-yp-dark">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                        {benefits.map(({ icon: Icon, text }) => (
                            <div key={text} className="flex flex-col items-center text-center gap-2 sm:gap-3">
                                <div className="bg-yp-yellow/10 border border-yp-yellow/30 p-2 sm:p-3">
                                    <Icon className="w-5 h-5 text-yp-yellow" />
                                </div>
                                <p className="text-[10px] sm:text-xs text-white/70 font-heading font-semibold tracking-wider leading-tight">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airports grid */}
            <section className="py-12 sm:py-16 bg-yp-cream">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark">
                            Airports We Serve
                        </h2>
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <div className="h-px w-12 bg-yp-dark/20" />
                            <div className="w-2 h-2 bg-yp-yellow rotate-45" />
                            <div className="h-px w-12 bg-yp-dark/20" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {airports.map(({ name, code, distance, desc, route }) => (
                            <Link
                                key={code}
                                to={route}
                                className="group bg-white yp-border-thick p-6 sm:p-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start justify-between mb-3 sm:mb-4">
                                    <div>
                                        <h3 className="font-display text-lg sm:text-xl font-bold text-yp-dark group-hover:text-yp-gold transition-colors">{name}</h3>
                                        <p className="text-xs text-yp-dark/50 font-heading tracking-wider">{distance}</p>
                                    </div>
                                    <span className="bg-yp-yellow px-3 py-1 font-heading font-bold text-xs sm:text-sm text-yp-dark tracking-wider">
                                        {code}
                                    </span>
                                </div>
                                <p className="text-sm text-yp-dark/60 leading-relaxed mb-3">{desc}</p>
                                <span className="inline-flex items-center gap-1 text-xs font-heading font-bold text-yp-dark tracking-wider uppercase group-hover:text-yp-gold transition-colors">
                                    View transfer details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-10 sm:py-14 bg-gradient-to-b from-yp-cream to-white text-center">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark mb-4">
                        Book Your Airport Transfer
                    </h2>
                    <p className="text-sm sm:text-base text-yp-dark/60 mb-6 sm:mb-8 max-w-md mx-auto">
                        Call now to secure your fixed-price airport transfer, or request a callback at your convenience.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:07387777202"
                            className="flex items-center gap-3 bg-yp-dark text-white px-6 sm:px-8 py-3 sm:py-4 font-heading font-bold tracking-wider hover:bg-black transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span className="phone-banner text-lg sm:text-xl">07387 777202</span>
                        </a>
                        <Link
                            to="/request-a-call"
                            className="flex items-center gap-2 bg-yp-yellow text-yp-dark px-6 sm:px-8 py-3 sm:py-4 font-heading font-bold text-sm tracking-wider hover:bg-yp-gold transition-colors"
                        >
                            Request a Call <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </YellowPagesLayout>
    );
};

export default AirportTrips;
