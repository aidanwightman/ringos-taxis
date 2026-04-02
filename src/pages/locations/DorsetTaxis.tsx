import LocationPage from "./LocationPage";

const DorsetTaxis = () => (
  <LocationPage
    locationName="Dorset"
    pageTitle="Dorset Taxis | Local Taxi Service Across Dorset — Ringo's Taxis"
    metaDescription="Need a taxi in Dorset? Ringo's Taxis covers Bournemouth, Poole, Ferndown, Verwood, Wimborne, Wareham and across Dorset 24/7. Call 07387 777202."
    h1="Dorset Taxis — Trusted Local Taxi Service"
    introParagraph="Ringo's Taxis provides reliable, 24/7 taxi services across Dorset — covering Bournemouth, Poole, Ferndown, Verwood, Wimborne, Wareham, and all surrounding Dorset towns and villages."
    bodyParagraphs={[
      "Looking for Dorset taxis or a local taxi near me in Dorset? Ringo's Taxis operates from Ringwood on the Hampshire/Dorset border, giving us excellent coverage across the whole of Dorset.",
      "Our Dorset taxi service covers the main towns including Bournemouth, Poole, Ferndown, Verwood, Wimborne Minster, and Wareham — as well as smaller villages and rural communities across the county.",
      "We offer fixed-price Dorset taxi rides, with no surprises on arrival. Whether you need a local daytime taxi, a late-night ride, or an early morning airport transfer from Dorset to Heathrow or Gatwick, our drivers are ready.",
      "Wheelchair accessible vehicles are available for passengers who need them. Our Dorset taxi service is trusted by hundreds of customers across the county — rated 4.9 stars for reliability, punctuality, and friendly service.",
    ]}
    nearbyAreas={["Bournemouth", "Poole", "Ferndown", "Verwood", "Wimborne", "Wareham", "Christchurch", "Swanage"]}
    mapSrc="https://www.openstreetmap.org/export/embed.html?bbox=-2.8%2C50.55%2C-1.6%2C51.0&layer=mapnik&marker=50.7500%2C-2.2500"
  />
);

export default DorsetTaxis;
