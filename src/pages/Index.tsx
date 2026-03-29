import { Phone, Accessibility, Plane, MapPin, ArrowRight, Star, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import YellowPagesLayout from "@/components/YellowPagesLayout";
import RequestCallForm from "@/components/RequestCallForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => (
  <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

    {/* Content */}
    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
      {/* Left: headline */}
      <div className="flex-1 text-white">
        <div className="inline-block bg-yp-yellow/90 text-yp-dark px-3 py-1 mb-4 sm:mb-6">
          <span className="font-heading font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
            Ringwood's Trusted Taxi Service
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
          Your Local<br />
          <span className="text-yp-yellow">Ringwood Cab</span><br />
          & Bournemouth Taxis
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-md mb-6 sm:mb-8 leading-relaxed">
          Looking for Ringwood taxis or a cab in Bournemouth? Wheelchair accessible taxis, 
          airport transfers, and reliable local journeys across the South UK.
        </p>
        <a
          href="tel:07387777202"
          className="inline-flex items-center gap-3 bg-yp-yellow text-yp-dark px-6 sm:px-8 py-3 sm:py-4 font-heading font-bold tracking-wider hover:bg-white transition-colors text-sm sm:text-base"
        >
          <Phone className="w-5 h-5" />
          <span className="phone-banner text-lg sm:text-xl md:text-2xl">07387 777202</span>
        </a>
      </div>

      {/* Right: booking form */}
      <div className="w-full lg:w-[380px] shrink-0">
        <RequestCallForm compact />
      </div>
    </div>
  </section>
);

const services = [
  {
    icon: Accessibility,
    title: "Disabled Access",
    desc: "Fully wheelchair accessible vehicles with ramp access. Safe, comfortable, and dignified transportation for all passengers.",
    image: "/disabled-access.jpeg",
    link: "/disabled-access",
    alt: "Wheelchair accessible taxi with ramp",
  },
  {
    icon: Plane,
    title: "Airport Trips",
    desc: "Reliable airport transfers to Bournemouth, Southampton, Heathrow & Gatwick. On time, every time — no stress.",
    image: "/terminal-3.jpeg",
    link: "/airport-trips",
    alt: "Taxi outside airport terminal",
  },
  {
    icon: MapPin,
    title: "Local Journeys",
    desc: "Covering Ringwood, Bournemouth, Christchurch, Furlong, New Milton, Verwood & all surrounding areas.",
    image: "/loading-bay.jpeg",
    link: "/service-areas",
    alt: "Taxi in loading bay ready for pickup",
  },
];

const ServicesSection = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-yp-cream">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      {/* Section header */}
      <div className="text-center mb-10 sm:mb-14">
        <span className="inline-block font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase text-yp-gold font-bold mb-2 sm:mb-3">
          Our Services
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-yp-dark">
          What We Offer
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-yp-dark/20" />
          <div className="w-2 h-2 bg-yp-yellow rotate-45" />
          <div className="h-px w-12 bg-yp-dark/20" />
        </div>
      </div>

      {/* Service cards — classified ad style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {services.map(({ icon: Icon, title, desc, image, link, alt }) => (
          <Link
            key={title}
            to={link}
            className="group bg-white yp-border-thick hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-yp-yellow p-2">
                <Icon className="w-5 h-5 text-yp-dark" />
              </div>
            </div>
            <div className="p-5 sm:p-6 border-t-4 border-yp-yellow">
              <h3 className="font-display text-lg sm:text-xl font-bold text-yp-dark mb-2">
                {title}
              </h3>
              <p className="text-sm text-yp-dark/60 leading-relaxed mb-4">
                {desc}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-heading font-bold text-yp-dark tracking-wider uppercase group-hover:text-yp-gold transition-colors">
                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const trustPoints = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Clock, label: "24/7 Available" },
  { icon: Accessibility, label: "Accessible" },
];

const TrustSection = () => (
  <section className="py-10 sm:py-14 bg-yp-dark">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {trustPoints.map(({ icon: Icon, label }) => (
          <div key={label} className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-yp-yellow/10 border-2 border-yp-yellow/30 mb-3 sm:mb-4">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-yp-yellow" />
            </div>
            <p className="font-heading font-bold text-xs sm:text-sm text-white tracking-wider uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CallToAction = () => (
  <section className="py-12 sm:py-16 bg-gradient-to-b from-yp-cream to-white">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
      <span className="inline-block font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase text-yp-gold font-bold mb-2 sm:mb-3">
        Book Your Journey
      </span>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-yp-dark mb-4 sm:mb-6">
        Ready to Go?
      </h2>
      <p className="text-sm sm:text-base text-yp-dark/60 max-w-lg mx-auto mb-6 sm:mb-8">
        Give us a call or request a callback — we'll have you on your way in no time.
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
);

const Index = () => {
  usePageSEO({
    title: "Ringwood Taxis & Bournemouth Taxis | Cab Bournemouth & Ringwood Cab",
    description: "Looking for Ringwood taxis or a cab in Bournemouth? Ringo's Taxis offers reliable local rides, airport transfers, and disabled access vehicles. 24/7 service.",
  });

  return (
    <YellowPagesLayout>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <CallToAction />
    </YellowPagesLayout>
  );
};

export default Index;
