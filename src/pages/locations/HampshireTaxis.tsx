import LocationPage from "./LocationPage";

const HampshireTaxis = () => (
  <LocationPage
    locationName="Hampshire"
    pageTitle="Hampshire Taxis | Local Taxi Service Across the County — Ringo's Taxis"
    metaDescription="Need a taxi in Hampshire? Ringo's Taxis covers Ringwood, New Forest, Lymington, Fordingbridge and across Hampshire 24/7. Call 07387 777202 for a local taxi."
    h1="Hampshire Taxis — Local Taxi Service Across the County"
    introParagraph="Ringo's Taxis is your trusted local taxi service across Hampshire. Based in Ringwood, we cover the New Forest, Lymington, Fordingbridge, New Milton, and the wider Hampshire area day and night."
    bodyParagraphs={[
      "Searching for Hampshire taxis or a local taxi near me in Hampshire? Ringo's Taxis is based in the heart of the county in Ringwood and covers a wide area across Hampshire — from the New Forest villages to the coast.",
      "We provide Hampshire taxi services for local journeys, long-distance rides, airport transfers, and wheelchair accessible transport. Our drivers know Hampshire's roads, lanes, and villages — so whether you're in a town or a rural community, we'll reach you.",
      "Our Hampshire taxi coverage includes Ringwood, Fordingbridge, Lymington, New Milton, Lyndhurst, Burley, Brockenhurst, and all surrounding New Forest towns and villages. We also connect Hampshire to Bournemouth, Poole, and Dorset.",
      "Whether you need a Hampshire taxi for a one-off trip or a regular journey, we offer competitive fixed prices, punctual drivers, and a 4.9-star service. Call us any time — we're available 24/7.",
    ]}
    nearbyAreas={["Ringwood", "Fordingbridge", "Lymington", "New Milton", "Lyndhurst", "Burley", "Brockenhurst", "Romsey"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-1.95%2C50.75%2C-1.0%2C51.2&layer=mapnik&marker=50.9540%2C-1.4880"
  />
);

export default HampshireTaxis;
