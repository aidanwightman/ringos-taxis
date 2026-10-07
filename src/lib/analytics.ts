// Google Analytics only loads after the visitor accepts cookies (UK PECR / GDPR).
const GA_ID = "G-PSM4Y2E8VF";
const CONSENT_KEY = "ringo-cookie-consent";

export type Consent = "accepted" | "rejected";

type Gtag = (...args: unknown[]) => void;
declare global {
    interface Window {
        dataLayer: unknown[];
        gtag?: Gtag;
    }
}

export function getConsent(): Consent | null {
    try {
        const value = localStorage.getItem(CONSENT_KEY);
        return value === "accepted" || value === "rejected" ? value : null;
    } catch {
        return null;
    }
}

export function setConsent(consent: Consent) {
    try {
        localStorage.setItem(CONSENT_KEY, consent);
    } catch {
        // Storage blocked: the choice just won't be remembered next visit.
    }
    if (consent === "accepted") loadAnalytics();
}

let loaded = false;

export function loadAnalytics() {
    if (loaded) return;
    loaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        // gtag.js expects the raw arguments object
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Count taps on any phone number link, so we can see which pages bring calls.
    document.addEventListener("click", (event) => {
        const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
        if (link) {
            window.gtag?.("event", "phone_call_click", { page_path: window.location.pathname });
        }
    });
}
