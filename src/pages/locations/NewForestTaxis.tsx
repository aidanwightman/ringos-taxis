import LocationPage from "./LocationPage";

const NewForestTaxis = () => (
  <LocationPage
    locationName="New Forest"
    pageTitle="New Forest Taxi | Local Cab Service across the New Forest — Ringo's Taxis"
    metaDescription="Need a taxi in the New Forest? Ringo's Taxis covers all New Forest villages and towns 24/7 — Lyndhurst, Brockenhurst, Burley, Lymington & more. Call 07387 777202."
    h1="New Forest Taxi — Covering the Whole New Forest 24/7"
    introParagraph="Ringo's Taxis is the New Forest's trusted local taxi service, covering Lyndhurst, Brockenhurst, Burley, Lymington, New Milton, Ringwood, and all surrounding villages. 24/7 availability, fixed prices — always there when you need us."
    bodyParagraphs={[
      "Searching for a New Forest taxi or a cab near me in the New Forest? Ringo's Taxis covers the entire New Forest district — from Fordingbridge and Ringwood in the west to Lymington and Brockenhurst in the east, and everywhere in between.",
      "Our drivers know the New Forest inside out. Every road, every village, every shortcut. Whether you need a short hop between villages or a longer journey to Bournemouth, Southampton, or Salisbury, we'll get you there on time.",
      "We provide fixed-price airport transfers from across the New Forest to Bournemouth Airport, Southampton Airport, Heathrow, and Gatwick — pre-book and travel without the stress.",
      "Trusted by New Forest residents for reliable, professional taxi services. Wheelchair accessible vehicles (WAV) available. Call 07387 777202 any time — 24 hours a day, 7 days a week.",
    ]}
    nearbyAreas={["Lyndhurst", "Brockenhurst", "Burley", "Lymington", "New Milton", "Ringwood", "Fordingbridge", "Beaulieu", "Totton"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.85%2C50.72%2C-1.45%2C50.95&layer=mapnik&marker=50.8600%2C-1.6000"
  />
);

export default NewForestTaxis;
