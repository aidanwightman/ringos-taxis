import LocationPage from "./LocationPage";

const LyndhurstTaxis = () => (
  <LocationPage
    locationName="Lyndhurst"
    pageTitle="Taxi Lyndhurst New Forest | Local Cab Service — Ringo's Taxis"
    metaDescription="Need a taxi in Lyndhurst? Ringo's Taxis covers Lyndhurst, Ashurst, and the New Forest 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi Lyndhurst — New Forest Local Cab Service"
    introParagraph="Ringo's Taxis provides reliable, 24/7 taxi services across Lyndhurst, Ashurst, Emery Down, and the heart of the New Forest. Local knowledge, fixed prices, always on time."
    bodyParagraphs={[
      "Searching for a taxi in Lyndhurst or a New Forest cab near me? Ringo's Taxis serves Lyndhurst High Street, Bank, Emery Down, Ashurst, and all surrounding New Forest villages with prompt, professional service.",
      "Our drivers know every road through the New Forest. We offer fixed-price taxis from Lyndhurst to Ringwood, Bournemouth, Southampton, and beyond — with no meters and no hidden charges.",
      "Airport transfers from Lyndhurst to Southampton Airport take approximately 25 minutes. We also cover Bournemouth Airport, Heathrow, and Gatwick — pre-book and we'll handle the rest.",
      "Call 07387 777202 to book your Lyndhurst taxi — available 24/7, year-round. Wheelchair accessible vehicles (WAV) available on request.",
    ]}
    nearbyAreas={["Ashurst", "Emery Down", "Bank", "Brockenhurst", "Burley", "Ringwood", "Southampton", "Totton"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.69%2C50.84%2C-1.49%2C50.92&layer=mapnik&marker=50.8701%2C-1.5781"
  />
);

export default LyndhurstTaxis;
