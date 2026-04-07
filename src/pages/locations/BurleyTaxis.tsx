import LocationPage from "./LocationPage";

const BurleyTaxis = () => (
  <LocationPage
    locationName="Burley"
    pageTitle="Taxi Burley New Forest | Local Cab Service — Ringo's Taxis"
    metaDescription="Need a taxi in Burley, New Forest? Ringo's Taxis covers Burley, Bransgore, and surrounding New Forest villages 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi Burley New Forest — Local Cab Service"
    introParagraph="Ringo's Taxis provides reliable taxi services across Burley, Bransgore, Crow, and the wider New Forest area. Whether you're heading into Ringwood, Christchurch, or further afield — we've got you covered."
    bodyParagraphs={[
      "Looking for a taxi in Burley New Forest? Ringo's Taxis serves Burley village and all nearby New Forest communities including Bransgore, Crow, Thorney Hill, and Bisterne. We're just a call away.",
      "We provide fixed-price local taxi journeys from Burley to Ringwood (~10 mins), Christchurch (~20 mins), Bournemouth (~30 mins), and across Hampshire and Dorset — transparent pricing, no surprises.",
      "Airport transfers from Burley to Bournemouth Airport (~30 mins), Southampton Airport, Heathrow, and Gatwick are available with pre-booking. We track your flight and arrive on time, every time.",
      "Call 07387 777202 any time to book your Burley taxi. Available 24 hours a day, 7 days a week — wheelchair accessible vehicles also available.",
    ]}
    nearbyAreas={["Bransgore", "Crow", "Thorney Hill", "Bisterne", "Ringwood", "Christchurch", "New Milton", "Fordingbridge"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.77%2C50.79%2C-1.57%2C50.87&layer=mapnik&marker=50.8235%2C-1.6612"
  />
);

export default BurleyTaxis;
