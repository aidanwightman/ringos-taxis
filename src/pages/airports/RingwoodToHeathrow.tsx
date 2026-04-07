import AirportRoutePage from "./AirportRoutePage";

const RingwoodToHeathrow = () => (
  <AirportRoutePage
    pageTitle="Ringwood to Heathrow Airport Taxi | Fixed Price Transfer — Ringo's Taxis"
    metaDescription="Need a taxi from Ringwood to Heathrow Airport? Ringo's Taxis offers fixed-price Ringwood to Heathrow transfers, flight tracking included. Call 07387 777202 to book."
    h1="Ringwood to Heathrow Airport Taxi"
    fromLocation="Ringwood"
    toAirport="Heathrow Airport"
    airportCode="LHR"
    approxTime="~1 hr 45 min"
    introParagraph="Fixed-price taxi from Ringwood to Heathrow Airport. We track your flight, arrive on time, and get you there without the stress — door to door."
    bodyParagraphs={[
      "Ringo's Taxis provides reliable, fixed-price taxi transfers from Ringwood to London Heathrow Airport (LHR). Whether you're flying from Terminal 2, 3, 4, or 5, we'll get you there on time — no meter, no surprises.",
      "The journey from Ringwood to Heathrow takes approximately 1 hour 45 minutes, depending on traffic. We recommend booking in advance, especially for early morning departures, and we'll track road conditions to ensure we leave at the right time.",
      "On your return, we monitor your incoming flight so we're always at Heathrow when you land — even if your flight is delayed. We offer meet-and-greet at arrivals as standard.",
      "We also collect from all surrounding New Forest and Dorset areas including Bournemouth, Christchurch, Ferndown, Verwood, Fordingbridge, and Wimborne for Heathrow transfers. Call for a fixed quote.",
    ]}
    includedFeatures={[
      "Fixed price — agreed upfront, no meter",
      "Flight tracking on outbound and return journeys",
      "Meet and greet at arrivals",
      "All terminals covered (T2, T3, T4, T5)",
      "Early morning and late night availability",
      "Wheelchair accessible vehicles available",
    ]}
    nearbyPickups={["Bournemouth", "Christchurch", "Ferndown", "Verwood", "Fordingbridge", "Wimborne", "New Milton", "Burley", "Lyndhurst"]}
  />
);

export default RingwoodToHeathrow;
