import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import YellowPagesLayout from "@/components/YellowPagesLayout";
import { usePageSEO } from "@/hooks/usePageSEO";

const NotFound = () => {
  usePageSEO({
    title: "Page Not Found | Ringo's Taxis",
    description: "Sorry, that page doesn't exist. Call Ringo's Taxis on 07387 777202 or head back to the homepage.",
  });

  return (
    <YellowPagesLayout>
      <section className="py-20 sm:py-28 bg-yp-cream">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-yp-dark mb-4">Page not found</h1>
          <p className="text-sm sm:text-base text-yp-dark/70 mb-8">
            Sorry, we couldn't find that page. Need a taxi? Give us a call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:07387777202"
              className="inline-flex items-center gap-3 bg-yp-dark text-white px-6 py-3 font-heading font-bold tracking-wider hover:bg-black transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="phone-banner text-lg">07387 777202</span>
            </a>
            <Link
              to="/"
              className="inline-flex items-center bg-yp-yellow text-yp-dark px-6 py-3 font-heading font-bold text-sm tracking-wider hover:bg-yp-gold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </YellowPagesLayout>
  );
};

export default NotFound;
