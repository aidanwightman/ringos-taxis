import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://www.ringotaxis.com";

interface PageSEOProps {
    title: string;
    description: string;
}

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

/** Head data collected while prerendering a page (see scripts/prerender.mjs). */
export interface SSRHead {
    title?: string;
    description?: string;
    canonical?: string;
    jsonLd: { id: string; data: JsonLd }[];
}

let ssrHead: SSRHead | null = null;

/** Start collecting head data for one prerendered page. */
export function beginSSRHead(): SSRHead {
    ssrHead = { jsonLd: [] };
    return ssrHead;
}

const isServer = typeof document === "undefined";

const setMeta = (selector: string, value: string) => {
    document.querySelector(selector)?.setAttribute("content", value);
};

/**
 * Sets the page title, description, canonical and social tags.
 * In the browser it updates the DOM; while prerendering it records them.
 */
export function usePageSEO({ title, description }: PageSEOProps) {
    const { pathname } = useLocation();
    const currentUrl = `${SITE_URL}${pathname}`;

    if (isServer && ssrHead) {
        ssrHead.title = title;
        ssrHead.description = description;
        ssrHead.canonical = currentUrl;
    }

    useEffect(() => {
        document.title = title;
        setMeta('meta[name="description"]', description);
        setMeta('meta[property="og:title"]', title);
        setMeta('meta[property="og:description"]', description);
        setMeta('meta[property="og:url"]', currentUrl);
        setMeta('meta[name="twitter:title"]', title);
        setMeta('meta[name="twitter:description"]', description);

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", currentUrl);
    }, [title, description, currentUrl]);
}

/**
 * Adds a JSON-LD structured data script to <head> for the current page.
 * Replaces any prerendered script with the same id so it isn't duplicated.
 */
export function useJsonLd(id: string, data: JsonLd) {
    const json = JSON.stringify(data);

    if (isServer && ssrHead) {
        ssrHead.jsonLd.push({ id, data });
    }

    useEffect(() => {
        document.getElementById(id)?.remove();
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        script.text = json;
        document.head.appendChild(script);
        return () => { script.remove(); };
    }, [id, json]);
}
