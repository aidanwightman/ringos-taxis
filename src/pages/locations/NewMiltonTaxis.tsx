import LocationPage from "./LocationPage";

const NewMiltonTaxis = () => (
  <LocationPage
    locationName="New Milton"
    pageTitle="Taxi New Milton | 24/7 Local Cab Service — Ringo's Taxis"
    metaDescription="Need a taxi in New Milton? Ringo's Taxis covers New Milton, Barton on Sea, and surrounding New Forest areas 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi New Milton — 24/7 Local Cab Service"
    introParagraph="Ringo's Taxis provides dependable, 24/7 taxi services across New Milton, Barton on Sea, Ashley, and the surrounding New Forest area. Always on time — call any time."
    bodyParagraphs={[
      "Searching for a taxi in New Milton or a cab near me in the New Forest? Ringo's Taxis covers all of New Milton — from the High Street and station to Barton on Sea, Ashley, and Bashley — with reliable, friendly service.",
      "Our New Milton taxi service offers local journeys as well as longer runs to Bournemouth, Christchurch, Lymington, Ringwood, and across Hampshire and Dorset — all at fixed, competitive prices.",
      "We provide pre-booked airport transfers from New Milton to Bournemouth Airport (~30 mins), Southampton Airport (~40 mins), Heathrow, and Gatwick. We monitor your flight so we're always there when you land.",
      "Book your New Milton taxi now by calling 07387 777202 — available 24/7, 365 days a year. Fully wheelchair accessible vehicles available on request.",
    ]}
    nearbyAreas={["Barton on Sea", "Ashley", "Bashley", "Christchurch", "Lymington", "Ringwood", "Bournemouth", "Bransgore"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.76%2C50.72%2C-1.56%2C50.80&layer=mapnik&marker=50.7571%2C-1.6560"
  />
);

export default NewMiltonTaxis;
