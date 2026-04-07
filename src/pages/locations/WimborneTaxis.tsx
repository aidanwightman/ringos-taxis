import LocationPage from "./LocationPage";

const WimborneTaxis = () => (
  <LocationPage
    locationName="Wimborne"
    pageTitle="Taxi Wimborne Minster | 24/7 Local Cab Service — Ringo's Taxis"
    metaDescription="Need a taxi in Wimborne Minster? Ringo's Taxis covers Wimborne and surrounding Dorset areas 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi Wimborne Minster — 24/7 Local Cab Service"
    introParagraph="Ringo's Taxis provides reliable 24/7 taxi services across Wimborne Minster, Colehill, Merley, and the wider East Dorset area. Call any time — we're always on the road."
    bodyParagraphs={[
      "Searching for a taxi in Wimborne Minster? Ringo's Taxis covers all of Wimborne — from the town centre and The Square to Colehill, Merley, and Canford Heath — with fast, reliable pickups around the clock.",
      "Our Wimborne taxi drivers offer local journeys as well as longer runs to Bournemouth, Poole, Ringwood, Ferndown, and across Hampshire and Dorset. All at fixed prices with no hidden charges.",
      "Travelling from Wimborne to an airport? We offer fixed-price transfers to Bournemouth Airport (~25 mins), Southampton Airport, Heathrow, and Gatwick. Pre-book your taxi and travel stress-free.",
      "Trusted by Wimborne residents for punctual, professional taxi services. Call 07387 777202 to book — available 24 hours a day, 7 days a week, 365 days a year.",
    ]}
    nearbyAreas={["Colehill", "Merley", "Canford Heath", "Ferndown", "Ringwood", "Bournemouth", "Poole", "Verwood"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-2.09%2C50.76%2C-1.89%2C50.85&layer=mapnik&marker=50.8000%2C-1.9836"
  />
);

export default WimborneTaxis;
