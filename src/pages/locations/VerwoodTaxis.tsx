import LocationPage from "./LocationPage";

const VerwoodTaxis = () => (
  <LocationPage
    locationName="Verwood"
    pageTitle="Taxi Verwood | 24/7 Local Cab Service — Ringo's Taxis"
    metaDescription="Need a taxi in Verwood? Ringo's Taxis covers Verwood, Three Legged Cross, and surrounding Dorset areas 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi Verwood — 24/7 Local Cab Service"
    introParagraph="Ringo's Taxis provides dependable taxi services across Verwood, Three Legged Cross, West Moors, and the surrounding Dorset area. Available 24/7 — just call and we'll be there."
    bodyParagraphs={[
      "Looking for a taxi in Verwood or a reliable cab near me? Ringo's Taxis serves all of Verwood — from Potterne Park and Poulner Lakes to Manor Road and the town centre — and all outlying areas.",
      "Our Verwood taxi drivers know the local roads well. Whether you need a trip to Ringwood, Ferndown, Wimborne, or further afield, we'll get you there on time with a fixed, transparent price.",
      "We provide airport transfers from Verwood to Bournemouth Airport, Southampton Airport, Heathrow, and Gatwick — pre-book your taxi and travel stress-free from your front door.",
      "Rated 4.9 stars by customers across Dorset. Call 07387 777202 any time to book your Verwood taxi — day or night, 365 days a year.",
    ]}
    nearbyAreas={["Three Legged Cross", "West Moors", "Ringwood", "Ferndown", "Wimborne", "Alderholt", "Cranborne"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.97%2C50.84%2C-1.77%2C50.93&layer=mapnik&marker=50.8793%2C-1.8764"
  />
);

export default VerwoodTaxis;
