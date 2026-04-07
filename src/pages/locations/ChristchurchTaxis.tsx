import LocationPage from "./LocationPage";

const ChristchurchTaxis = () => (
  <LocationPage
    locationName="Christchurch"
    pageTitle="Taxi Christchurch | 24/7 Local Cab Service — Ringo's Taxis"
    metaDescription="Need a taxi in Christchurch? Ringo's Taxis covers Christchurch, Highcliffe, Mudeford and surrounding areas 24/7. Airport transfers & wheelchair accessible vehicles. Call 07387 777202."
    h1="Taxi Christchurch — 24/7 Local Cab Service"
    introParagraph="Ringo's Taxis covers Christchurch, Highcliffe, Mudeford, Burton, and surrounding areas with a reliable, 24/7 taxi service. Fixed prices, professional drivers — call any time."
    bodyParagraphs={[
      "Looking for a taxi in Christchurch or a local cab near me? Ringo's Taxis serves the whole Christchurch area — the town centre, Bargates, Highcliffe, Mudeford, Friars Cliff, and Burton — with fast, dependable pickups.",
      "Our drivers offer fixed-price local journeys across Christchurch and longer runs to Bournemouth, Ringwood, Poole, and across Hampshire and Dorset. No meter, no surprises — just a clear price upfront.",
      "Airport transfers from Christchurch to Bournemouth Airport take around 20–25 minutes. We also cover Southampton Airport, Heathrow, and Gatwick — pre-book and we'll track your flight, so no waiting around.",
      "Call 07387 777202 to book your Christchurch taxi — day or night, available 24/7, 365 days a year. Wheelchair accessible vehicles also available.",
    ]}
    nearbyAreas={["Highcliffe", "Mudeford", "Friars Cliff", "Burton", "Bournemouth", "Ringwood", "New Milton", "Bransgore"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.84%2C50.70%2C-1.64%2C50.78&layer=mapnik&marker=50.7340%2C-1.7778"
  />
);

export default ChristchurchTaxis;
