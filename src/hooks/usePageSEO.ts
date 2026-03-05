import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageSEOProps {
    title: string;
    description: string;
}

/**
 * Sets document.title and meta description for SPA per-page SEO.
 * Call this hook at the top of each page component.
 */
export function usePageSEO({ title, description }: PageSEOProps) {
    const location = useLocation();

    useEffect(() => {
        const baseUrl = "https://ringostaxis-south.co.uk";
        const currentUrl = `${baseUrl}${location.pathname}`;

        // Set document title
        document.title = title;

        // Set meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

        // Set OG title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", title);
        }

        // Set OG description
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute("content", description);
        }

        // Update Canonical
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', currentUrl);

        // Update OG URL
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute("content", currentUrl);
        }

        return () => {
            document.title = "Ringo's Taxis | Ringwood, Bournemouth & South UK Taxi Service";
        };
    }, [title, description, location.pathname]);
}
