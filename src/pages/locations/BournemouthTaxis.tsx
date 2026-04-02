import LocationPage from "./LocationPage";

const BournemouthTaxis = () => (
  <LocationPage
    locationName="Bournemouth"
    pageTitle="Bournemouth Taxi | Local Cab Service 24/7 — Ringo's Taxis"
    metaDescription="Need a taxi in Bournemouth? Ringo's Taxis covers all of Bournemouth, Boscombe, Westbourne and surrounding areas 24/7. Airport transfers available. Call 07387 777202."
    h1="Bournemouth Taxi — Reliable Local Cab Service"
    introParagraph="Ringo's Taxis provides trusted, 24/7 taxi services across Bournemouth and the surrounding area. Whether it's a trip to Bournemouth town centre, the seafront, or a late-night ride home, we've got you covered."
    bodyParagraphs={[
      "Looking for a taxi in Bournemouth? Ringo's Taxis operates across all of Bournemouth — from the town centre and Bournemouth Station to Boscombe, Westbourne, Charminster, Winton, and the seafront.",
      "We offer fixed-price Bournemouth taxi rides with no hidden charges. Our drivers are fully licensed, locally knowledgeable, and available around the clock — so whether you need a morning cab or a late-night taxi home after a night out, we're always here.",
      "Our Bournemouth taxi service also covers airport transfers to Bournemouth Airport, Southampton Airport, Heathrow, and Gatwick. Pre-book your taxi and we'll track your flight to ensure we're there when you land.",
      "Connecting Bournemouth to Ringwood, Christchurch, Poole, Ferndown, and across Hampshire and Dorset — Ringo's Taxis is your local taxi partner for every journey.",
    ]}
    nearbyAreas={["Boscombe", "Westbourne", "Charminster", "Winton", "Christchurch", "Poole", "Ringwood", "Ferndown"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-2.05%2C50.65%2C-1.65%2C50.78&layer=mapnik&marker=50.7192%2C-1.8808"
  />
);

export default BournemouthTaxis;
