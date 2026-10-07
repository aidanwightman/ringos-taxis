import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConsent, loadAnalytics, setConsent, type Consent } from "@/lib/analytics";

const CookieBanner = () => {
    // Starts hidden so the prerendered HTML and the first browser render match.
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = getConsent();
        if (consent === "accepted") loadAnalytics();
        else if (consent === null) setVisible(true);
    }, []);

    if (!visible) return null;

    const choose = (consent: Consent) => {
        setConsent(consent);
        setVisible(false);
    };

    return (
        <div
            role="region"
            aria-label="Cookie consent"
            className="fixed inset-x-0 bottom-0 z-50 bg-yp-dark text-white border-t-4 border-yp-yellow p-4 sm:p-5"
        >
            <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <p className="text-xs sm:text-sm text-white/80 flex-1">
                    We'd like to use Google Analytics cookies to see how people use our site. They're only set if you accept.{" "}
                    <Link to="/privacy" className="underline hover:text-yp-yellow">Privacy policy</Link>
                </p>
                <div className="flex gap-3 shrink-0">
                    <button
                        type="button"
                        onClick={() => choose("rejected")}
                        className="px-4 py-2 text-xs sm:text-sm font-heading font-bold tracking-wider border-2 border-white/40 hover:border-white transition-colors"
                    >
                        Reject
                    </button>
                    <button
                        type="button"
                        onClick={() => choose("accepted")}
                        className="px-4 py-2 text-xs sm:text-sm font-heading font-bold tracking-wider bg-yp-yellow text-yp-dark hover:bg-white transition-colors"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
