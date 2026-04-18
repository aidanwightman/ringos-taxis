import { Phone, MapPin, Clock, Shield, CheckCircle, ArrowRight, Plane } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import YellowPagesLayout from "@/components/YellowPagesLayout";
import RequestCallForm from "@/components/RequestCallForm";
import { usePageSEO } from "@/hooks/usePageSEO";

interface AirportRoutePageProps {
  pageTitle: string;
  metaDescription: string;
  h1: string;
  fromLocation: string;
  toAirport: string;
  airportCode: string;
  approxTime: string;
  introParagraph: string;
  bodyParagraphs: string[];
  includedFeatures: string[];
  nearbyPickups: string[];
}

const AirportRoutePage = ({
  pageTitle,
  metaDescription,
  h1,
  fromLocation,
  toAirport,
  airportCode,
  approxTime,
  introParagraph,
  bodyParagraphs,
  includedFeatures,
  nearbyPickups,
}: AirportRoutePageProps) => {
  usePageSEO({ title: pageTitle, description: metaDescription });

  const { pathname } = useLocation();
  const pageUrl = `https://ringotaxis.com${pathname}`;

  useEffect(() => {
    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ringotaxis.com/" },
          { "@type": "ListItem", "position": 2, "name": "Airport Transfers", "item": "https://ringotaxis.com/airport-trips" },
          { "@type": "ListItem", "position": 3, "name": `${fromLocation} to ${toAirport}`, "item": pageUrl },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Airport Transfer",
        "name": `${fromLocation} to ${toAirport} Taxi — Ringo's Taxis`,
        "description": metaDescription,
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://ringotaxis.com",
          "name": "Ringo's Taxis",
          "telephone": "+447387777202",
        },
        "areaServed": [
          { "@type": "Place", "name": fromLocation },
          { "@type": "Airport", "name": toAirport, "iataCode": airportCode },
        ],
        "url": pageUrl,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "description": "Fixed price airport transfer — no hidden fees",
        },
      },
    ];
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `schema-airport-${airportCode.toLowerCase()}`;
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [fromLocation, toAirport, airportCode, metaDescription, pageUrl]);

  return (
    <YellowPagesLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-yp-dark to-yp-dark/90 py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-yp-yellow/20 border border-yp-yellow/40 px-3 py-1 mb-4">
                <Plane className="w-3 h-3 text-yp-yellow" />
                <span className="font-heading font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-yp-yellow">
                  Airport Transfer
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                {h1}
              </h1>
              <p className="text-sm sm:text-base text-white/70 max-w-md mb-6 leading-relaxed">
                {introParagraph}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yp-yellow/10 border border-yp-yellow/30 px-4 py-2 text-center">
                  <p className="text-xs text-yp-yellow/70 font-heading tracking-wider uppercase">Airport</p>
                  <p className="font-display font-bold text-yp-yellow text-lg">{airportCode}</p>
                </div>
                <div className="bg-yp-yellow/10 border border-yp-yellow/30 px-4 py-2 text-center">
                  <p className="text-xs text-yp-yellow/70 font-heading tracking-wider uppercase">Journey Time</p>
                  <p className="font-display font-bold text-yp-yellow text-lg">{approxTime}</p>
                </div>
              </div>
              <a
                href="tel:07387777202"
                className="inline-flex items-center gap-3 bg-yp-yellow text-yp-dark px-6 sm:px-8 py-3 sm:py-4 font-heading font-bold tracking-wider hover:bg-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="phone-banner text-lg sm:text-xl">07387 777202</span>
              </a>
            </div>
            <div className="w-full">
              <RequestCallForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="py-8 bg-yp-yellow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { icon: Clock, label: "Flight Tracking Included" },
              { icon: Shield, label: "Fixed Price — No Meter" },
              { icon: MapPin, label: "Door-to-Door Service" },
              { icon: CheckCircle, label: "24/7 Availability" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-5 h-5 text-yp-dark" />
                <p className="font-heading font-bold text-[10px] sm:text-xs text-yp-dark tracking-wider uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark">
                {fromLocation} to {toAirport}
              </h2>
              {bodyParagraphs.map((para, i) => (
                <p key={i} className="text-sm sm:text-base text-yp-dark/70 leading-relaxed">
                  {para}
                </p>
              ))}

              {/* What's included */}
              <div className="bg-yp-cream yp-border-dashed p-4 sm:p-5 mt-6">
                <p className="font-heading font-bold text-xs text-yp-dark tracking-wider uppercase mb-3">
                  What's Included
                </p>
                <ul className="space-y-2">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-yp-dark/70">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* Nearby pickups */}
              <div className="bg-yp-cream yp-border-thick p-5 sm:p-6 mb-6">
                <p className="font-heading font-bold text-xs text-yp-dark tracking-wider uppercase mb-3">
                  We Also Pick Up From
                </p>
                <div className="flex flex-wrap gap-2">
                  {nearbyPickups.map((area) => (
                    <span
                      key={area}
                      className="flex items-center gap-1 text-xs bg-white border border-yp-dark/10 px-2 py-1 text-yp-dark/70"
                    >
                      <MapPin className="w-3 h-3 text-yp-gold" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Booking form */}
              <RequestCallForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-yp-dark text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Book Your {toAirport} Transfer
          </h2>
          <p className="text-sm sm:text-base text-white/60 mb-6 sm:mb-8 max-w-md mx-auto">
            Call now or request a callback — we'll confirm your fixed price and get you there on time.
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
              to="/airport-trips"
              className="flex items-center gap-2 border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 font-heading font-bold text-sm tracking-wider hover:border-yp-yellow hover:text-yp-yellow transition-colors"
            >
              All Airport Transfers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </YellowPagesLayout>
  );
};

export default AirportRoutePage;
