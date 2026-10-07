import type { ReactNode } from "react";
import YellowPagesLayout from "@/components/YellowPagesLayout";
import { usePageSEO } from "@/hooks/usePageSEO";

const Section = ({ heading, children }: { heading: string; children: ReactNode }) => (
    <div className="space-y-3">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-yp-dark">{heading}</h2>
        {children}
    </div>
);

const Privacy = () => {
    usePageSEO({
        title: "Privacy & Cookie Policy | Ringo's Taxis",
        description: "How Ringo's Taxis uses the details you give us through our website, and how we use cookies.",
    });

    return (
        <YellowPagesLayout
            title="Privacy & Cookie Policy"
            description="How we use the details you give us, and how we use cookies."
        >
            <section className="py-10 sm:py-14 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-sm sm:text-base text-yp-dark/80 leading-relaxed">
                    <p>Last updated: 7 October 2026</p>

                    <Section heading="Who we are">
                        <p>
                            Ringo's Taxis is a taxi and private hire service based in Ringwood, Hampshire. We are responsible
                            for the personal information you give us through this website. You can contact us about your data
                            on <a href="tel:07387777202" className="underline">07387 777202</a>.
                        </p>
                    </Section>

                    <Section heading="What we collect and why">
                        <p>
                            When you use our "Request a Call Back" form we collect your name, your phone number and/or email
                            address, your area and any message you add. We use these only to contact you about your journey.
                            Our legal basis is that you have asked us to contact you (steps taken at your request before a contract).
                        </p>
                        <p>
                            The form is delivered to us by email through Web3Forms, a form-handling service that acts on our behalf.
                            We do not sell your details or use them for marketing.
                        </p>
                    </Section>

                    <Section heading="How long we keep it">
                        <p>
                            We keep enquiry details only as long as needed to deal with your booking and any follow-up, and
                            normally no longer than 12 months.
                        </p>
                    </Section>

                    <Section heading="Cookies">
                        <p>
                            We only set analytics cookies if you click "Accept" on our cookie banner. These are Google Analytics
                            cookies (names starting with <code>_ga</code>) that help us understand how many people visit and which
                            pages are useful. Google Analytics is provided by Google, which may process this data outside the UK.
                        </p>
                        <p>
                            If you click "Reject", no analytics cookies are set. We store your choice in your browser so we don't
                            ask again. To change your mind, clear this site's data in your browser and you'll be asked again.
                        </p>
                        <p>
                            Our location pages show maps from OpenStreetMap, which receives your IP address when the map loads.
                        </p>
                    </Section>

                    <Section heading="Your rights">
                        <p>
                            You can ask to see, correct or delete the information we hold about you, or object to how we use it.
                            Call us on <a href="tel:07387777202" className="underline">07387 777202</a>. If you're unhappy with how
                            we've handled your data, you can complain to the Information Commissioner's Office at{" "}
                            <a href="https://ico.org.uk" className="underline" rel="noopener">ico.org.uk</a>.
                        </p>
                    </Section>
                </div>
            </section>
        </YellowPagesLayout>
    );
};

export default Privacy;
