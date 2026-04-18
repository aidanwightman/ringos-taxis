import { Phone, MapPin, ArrowRight, Star, Clock, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import YellowPagesLayout from "@/components/YellowPagesLayout";
import RequestCallForm from "@/components/RequestCallForm";
import { usePageSEO } from "@/hooks/usePageSEO";

// Map of town names to their dedicated page routes
const areaRouteMap: Record<string, string> = {
  "Ringwood": "/ringwood-taxis",
  "Bournemouth": "/bournemouth-taxis",
  "Christchurch": "/taxi-christchurch",
  "Ferndown": "/taxi-ferndown",
  "New Milton": "/taxi-new-milton",
  "Verwood": "/taxi-verwood",
  "Wimborne": "/taxi-wimborne",
  "Wimborne Minster": "/taxi-wimborne",
  "Fordingbridge": "/taxi-fordingbridge",
  "Lymington": "/taxi-lymington",
  "Lyndhurst": "/taxi-lyndhurst",
  "Brockenhurst": "/taxi-brockenhurst",
  "Burley": "/taxi-burley",
  "New Forest": "/new-forest-taxis",
  "Hampshire": "/hampshire-taxis",
  "Dorset": "/dorset-taxis",
};

interface LocationPageProps {
  locationName: string;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  introParagraph: string;
  bodyParagraphs: string[];
  nearbyAreas: string[];
  mapSrc: string;
}

const LocationPage = ({
  locationName,
  pageTitle,
  metaDescription,
  h1,
  introParagraph,
  bodyParagraphs,
  nearbyAreas,
  mapSrc,
}: LocationPageProps) => {
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
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://ringotaxis.com/service-areas" },
          { "@type": "ListItem", "position": 3, "name": `${locationName} Taxis`, "item": pageUrl },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Taxi Service",
        "name": `${locationName} Taxi Service — Ringo's Taxis`,
        "description": metaDescription,
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://ringotaxis.com",
          "name": "Ringo's Taxis",
          "telephone": "+447387777202",
        },
        "areaServed": { "@type": "City", "name": locationName },
        "url": pageUrl,
      },
    ];
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `schema-location-${locationName.toLowerCase().replace(/\s+/g, "-")}`;
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [locationName, metaDescription, pageUrl]);

  return (
    <YellowPagesLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-yp-yellow to-yp-cream py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-yp-dark/10 px-3 py-1 mb-4">
            <span className="font-heading font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-yp-dark">
              Ringo's Taxis
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-yp-dark mb-4">
            {h1}
          </h1>
          <p className="text-sm sm:text-base text-yp-dark/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            {introParagraph}
          </p>
          <a
            href="tel:07387777202"
            className="inline-flex items-center gap-3 bg-yp-dark text-white px-6 sm:px-8 py-3 sm:py-4 font-heading font-bold tracking-wider hover:bg-black transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="phone-banner text-lg sm:text-xl">07387 777202</span>
          </a>
        </div>
      </section>

      {/* Content + Map */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4">
              {bodyParagraphs.map((para, i) => (
                <p key={i} className="text-sm sm:text-base text-yp-dark/70 leading-relaxed">
                  {para}
                </p>
              ))}
              {nearbyAreas.length > 0 && (
                <div className="bg-yp-cream yp-border-dashed p-4 sm:p-5 mt-6">
                  <p className="font-heading font-bold text-xs text-yp-dark tracking-wider uppercase mb-3">
                    Areas We Cover Nearby
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {nearbyAreas.map((area) => {
                      const route = areaRouteMap[area];
                      return route ? (
                        <Link
                          key={area}
                          to={route}
                          className="flex items-center gap-1 text-xs bg-white border border-yp-dark/10 px-2 py-1 text-yp-dark/70 hover:border-yp-gold hover:text-yp-dark transition-colors"
                        >
                          <MapPin className="w-3 h-3 text-yp-gold" />
                          {area}
                        </Link>
                      ) : (
                        <span
                          key={area}
                          className="flex items-center gap-1 text-xs bg-white border border-yp-dark/10 px-2 py-1 text-yp-dark/70"
                        >
                          <MapPin className="w-3 h-3 text-yp-gold" />
                          {area}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="yp-border-thick overflow-hidden h-[300px] sm:h-[400px]">
              <iframe
                title={`Map showing ${locationName} taxi service area`}
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 bg-yp-dark">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Star, label: "5-Star Rated" },
              { icon: Clock, label: "24/7 Available" },
              { icon: Shield, label: "Fully Insured" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-yp-yellow/10 border-2 border-yp-yellow/30 mb-3">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-yp-yellow" />
                </div>
                <p className="font-heading font-bold text-[10px] sm:text-xs text-white tracking-wider uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA + form */}
      <section className="py-12 sm:py-16 bg-yp-cream">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <span className="inline-block font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase text-yp-gold font-bold mb-2 sm:mb-3">
                Book Your Ride
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-yp-dark mb-4">
                Book Your {locationName} Taxi
              </h2>
              <p className="text-sm sm:text-base text-yp-dark/70 leading-relaxed mb-6">
                Call us directly on <strong>07387 777202</strong> or request a callback — we'll get back to you fast. Available 24 hours a day, 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="tel:07387777202"
                  className="inline-flex items-center gap-3 bg-yp-dark text-white px-6 py-3 font-heading font-bold tracking-wider hover:bg-black transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="phone-banner text-lg">07387 777202</span>
                </a>
              </div>
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 text-sm font-heading font-bold text-yp-dark tracking-wider hover:text-yp-gold transition-colors"
              >
                View all areas we cover <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <RequestCallForm />
          </div>
        </div>
      </section>
    </YellowPagesLayout>
  );
};

export default LocationPage;
