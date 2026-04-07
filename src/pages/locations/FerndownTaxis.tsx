import LocationPage from "./LocationPage";

const FerndownTaxis = () => (
  <LocationPage
    locationName="Ferndown"
    pageTitle="Taxi Ferndown | 24/7 Local Cab Service — Ringo's Taxis"
    metaDescription="Looking for a taxi in Ferndown? Ringo's Taxis covers Ferndown, Uddens, and surrounding Dorset areas 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi Ferndown — 24/7 Local Cab Service"
    introParagraph="Ringo's Taxis is your go-to taxi service in Ferndown, covering the town centre, Uddens, Stapehill, and all surrounding areas around the clock. Fixed prices, no fuss — just call."
    bodyParagraphs={[
      "Searching for a taxi in Ferndown or a cab near me? Ringo's Taxis operates across all of Ferndown and the surrounding BH22 area, including Longham, Stapehill, and Uddens Industrial Estate.",
      "Our experienced drivers provide local Ferndown taxi journeys as well as longer runs to Bournemouth, Ringwood, Wimborne, Poole, and across Dorset and Hampshire — all at fixed, competitive prices.",
      "Need an airport transfer from Ferndown? We offer pre-booked taxis to Bournemouth Airport (approximately 20 minutes), Southampton Airport, Heathrow, and Gatwick — with flight tracking included.",
      "Available 24/7, 365 days a year. Call 07387 777202 now to book your Ferndown taxi — or request a callback and we'll call you back promptly.",
    ]}
    nearbyAreas={["Uddens", "Stapehill", "Longham", "Wimborne", "Ringwood", "Bournemouth", "Verwood", "West Moors"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-2.01%2C50.76%2C-1.81%2C50.85&layer=mapnik&marker=50.7998%2C-1.9013"
  />
);

export default FerndownTaxis;
