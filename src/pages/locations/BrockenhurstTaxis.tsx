import LocationPage from "./LocationPage";

const BrockenhurstTaxis = () => (
  <LocationPage
    locationName="Brockenhurst"
    pageTitle="Taxi Brockenhurst | New Forest Local Cab Service — Ringo's Taxis"
    metaDescription="Need a taxi in Brockenhurst? Ringo's Taxis covers Brockenhurst, Sway, and the New Forest 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi Brockenhurst — New Forest Local Cab Service"
    introParagraph="Ringo's Taxis serves Brockenhurst, Sway, Setley, and the surrounding New Forest area with reliable 24/7 taxi services. Local expertise, fixed prices — call any time."
    bodyParagraphs={[
      "Looking for a taxi in Brockenhurst? Ringo's Taxis covers Brockenhurst village, the train station, Sway, Setley, and all nearby New Forest communities with fast, professional taxi service.",
      "Our drivers offer fixed-price local journeys from Brockenhurst to Lymington, Lyndhurst, New Milton, Ringwood, and Bournemouth — all at transparent prices with no hidden charges.",
      "Airport transfers from Brockenhurst to Southampton Airport take approximately 30 minutes. We also cover Bournemouth Airport, Heathrow, and Gatwick — pre-book your ride and relax.",
      "Call 07387 777202 to book your Brockenhurst taxi — available 24/7, 365 days a year. Fully wheelchair accessible vehicles (WAV) available on request.",
    ]}
    nearbyAreas={["Sway", "Setley", "Lymington", "Lyndhurst", "New Milton", "Ringwood", "Burley", "Beaulieu"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.67%2C50.78%2C-1.47%2C50.87&layer=mapnik&marker=50.8176%2C-1.5714"
  />
);

export default BrockenhurstTaxis;
