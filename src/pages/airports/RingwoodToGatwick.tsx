import AirportRoutePage from "./AirportRoutePage";

const RingwoodToGatwick = () => (
  <AirportRoutePage
    pageTitle="Ringwood to Gatwick Airport Taxi | Fixed Price Transfer — Ringo's Taxis"
    metaDescription="Need a taxi from Ringwood to Gatwick Airport? Ringo's Taxis provides fixed-price Ringwood to Gatwick transfers with flight tracking. Call 07387 777202 to book."
    h1="Ringwood to Gatwick Airport Taxi"
    fromLocation="Ringwood"
    toAirport="Gatwick Airport"
    airportCode="LGW"
    approxTime="~2 hrs"
    introParagraph="Fixed-price taxi transfers from Ringwood to Gatwick Airport. We handle the drive so you can relax — door-to-door service with flight tracking included."
    bodyParagraphs={[
      "Ringo's Taxis offers reliable, fixed-price taxi transfers from Ringwood to London Gatwick Airport (LGW). Covering both the North and South terminals, we'll have you at the airport in good time — whatever the hour.",
      "The journey from Ringwood to Gatwick takes approximately 2 hours. We plan your departure time carefully to avoid peak traffic, and always leave a comfortable buffer before your check-in deadline.",
      "Flying into Gatwick? We monitor your incoming flight and arrive at the terminal when you do — no waiting, no extra charges for delays. Meet-and-greet at arrivals as standard.",
      "Pick-ups available from across the New Forest, Dorset, and Hampshire — including Bournemouth, Christchurch, Wimborne, Verwood, Fordingbridge, and all surrounding areas. Contact us for a fixed quote.",
    ]}
    includedFeatures={[
      "Fixed price — agreed upfront, no meter",
      "Flight tracking — we adjust if your flight is delayed",
      "Both terminals covered (North & South)",
      "Meet and greet at arrivals",
      "24/7 availability — including early mornings",
      "Wheelchair accessible vehicles available",
    ]}
    nearbyPickups={["Bournemouth", "Christchurch", "Ferndown", "Verwood", "Fordingbridge", "Wimborne", "New Milton", "Lymington", "Brockenhurst"]}
  />
);

export default RingwoodToGatwick;
