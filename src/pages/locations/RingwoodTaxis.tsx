import LocationPage from "./LocationPage";

const RingwoodTaxis = () => (
  <LocationPage
    locationName="Ringwood"
    pageTitle="Ringwood Taxis | 24/7 Local Cab Service — Ringo's Taxis"
    metaDescription="Looking for taxis in Ringwood? Ringo's Taxis is based in Ringwood, Hampshire and runs 24/7. Local journeys, airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Ringwood Taxis — 24/7 Local Cab Service"
    introParagraph="Based right here in Ringwood, Hampshire, Ringo's Taxis is your local taxi service for quick town runs, night rides, airport transfers, and everything in between. Call any time — we're always available."
    bodyParagraphs={[
      "When you search for taxis in Ringwood or a taxi near me, Ringo's Taxis is the local answer. We've been serving Ringwood and the surrounding Hampshire and Dorset area with reliable, punctual taxi services around the clock.",
      "Whether you need a taxi from Ringwood town centre, a pick-up from a local pub, a school run, or an early morning airport transfer, our drivers know Ringwood inside out. We'll get you there on time, every time.",
      "Our Ringwood taxi service covers the entire BH24 postcode area including Ringwood town centre, Poulner, Moortown, Kingston, and all surrounding villages. We also run longer journeys to Bournemouth, Southampton, and beyond.",
      "Fixed prices, no hidden charges, and a driver you can trust. That's why we're rated 4.9 stars by our Ringwood customers. Book your local taxi today.",
    ]}
    nearbyAreas={["The Furlong", "Poulner", "Moortown", "Kingston", "Bournemouth", "Ferndown", "Verwood", "Fordingbridge", "New Milton"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-2.05%2C50.75%2C-1.55%2C50.95&layer=mapnik&marker=50.8467%2C-1.7878"
  />
);

export default RingwoodTaxis;
