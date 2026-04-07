import LocationPage from "./LocationPage";

const FordingbridgeTaxis = () => (
  <LocationPage
    locationName="Fordingbridge"
    pageTitle="Taxi Fordingbridge | 24/7 Local Cab Service — Ringo's Taxis"
    metaDescription="Looking for a taxi in Fordingbridge? Ringo's Taxis covers Fordingbridge and the surrounding New Forest area 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi Fordingbridge — 24/7 Local Cab Service"
    introParagraph="Need a taxi in Fordingbridge? Ringo's Taxis provides reliable, around-the-clock taxi services across Fordingbridge, the Avon Valley, and the wider New Forest area. Call any time — day or night."
    bodyParagraphs={[
      "When you search for a taxi in Fordingbridge or a cab near me, Ringo's Taxis is your local answer. We serve Fordingbridge town centre, Sandleheath, Breamore, Godshill, and all surrounding villages across the New Forest district.",
      "Whether you need a quick trip into town, a school run, a journey to Ringwood or Salisbury, or an early morning airport transfer, our drivers know every road in and around Fordingbridge inside out.",
      "We offer fixed prices with no hidden charges for all Fordingbridge taxi journeys — local trips, longer county runs, and fixed-price transfers to Bournemouth Airport, Southampton Airport, Heathrow, and Gatwick.",
      "Trusted by Fordingbridge residents for reliable, punctual taxi services. Book your local taxi now by calling 07387 777202 — available 24 hours a day, 7 days a week.",
    ]}
    nearbyAreas={["Sandleheath", "Breamore", "Godshill", "Alderholt", "Ringwood", "Salisbury", "Verwood", "Cranborne"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.92%2C50.88%2C-1.72%2C50.98&layer=mapnik&marker=50.9267%2C-1.7922"
  />
);

export default FordingbridgeTaxis;
