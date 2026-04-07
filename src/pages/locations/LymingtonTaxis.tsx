import LocationPage from "./LocationPage";

const LymingtonTaxis = () => (
  <LocationPage
    locationName="Lymington"
    pageTitle="Taxi Lymington | 24/7 Local Cab Service — Ringo's Taxis"
    metaDescription="Need a taxi in Lymington? Ringo's Taxis covers Lymington, Pennington, and surrounding New Forest areas 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi Lymington — 24/7 Local Cab Service"
    introParagraph="Ringo's Taxis provides reliable, 24/7 taxi services across Lymington, Pennington, Sway, and the surrounding New Forest coastline. Professional service, fixed prices, available any time."
    bodyParagraphs={[
      "Looking for a taxi in Lymington or a local cab in the New Forest? Ringo's Taxis covers all of Lymington — from the High Street and marina to Pennington, Milford on Sea, and Sway — with prompt, dependable service.",
      "Our Lymington taxi service offers fixed-price journeys to Brockenhurst, New Milton, Ringwood, Bournemouth, and across Hampshire and Dorset. Local knowledge, transparent pricing, no hidden charges.",
      "Airport transfers from Lymington to Bournemouth Airport (~40 mins) and Southampton Airport (~40 mins) are available. We also cover Heathrow and Gatwick — pre-book your taxi for a stress-free journey.",
      "Book your Lymington taxi by calling 07387 777202 — available 24 hours a day, 7 days a week. Wheelchair accessible vehicles available on request.",
    ]}
    nearbyAreas={["Pennington", "Milford on Sea", "Sway", "Brockenhurst", "New Milton", "Ringwood", "Bournemouth", "Lyndhurst"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.65%2C50.72%2C-1.45%2C50.81&layer=mapnik&marker=50.7572%2C-1.5443"
  />
);

export default LymingtonTaxis;
