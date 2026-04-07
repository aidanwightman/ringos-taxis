import AirportRoutePage from "./AirportRoutePage";

const RingwoodToSouthampton = () => (
  <AirportRoutePage
    pageTitle="Ringwood to Southampton Airport Taxi | Fixed Price Transfer — Ringo's Taxis"
    metaDescription="Need a taxi from Ringwood to Southampton Airport? Ringo's Taxis provides fixed-price transfers with flight tracking. ~45 minutes. Call 07387 777202 to book."
    h1="Ringwood to Southampton Airport Taxi"
    fromLocation="Ringwood"
    toAirport="Southampton Airport"
    airportCode="SOU"
    approxTime="~45 min"
    introParagraph="Fixed-price taxi from Ringwood to Southampton Airport. Just 45 minutes, no stress — door-to-door service with flight tracking included."
    bodyParagraphs={[
      "Ringo's Taxis provides reliable, fixed-price taxi transfers from Ringwood to Southampton Airport (SOU). At approximately 45 minutes from Ringwood, Southampton is one of the most convenient airports for New Forest and Hampshire travellers.",
      "Southampton Airport serves a wide range of domestic and European destinations. We pre-book your transfer, track road conditions, and ensure you arrive at the terminal in good time for check-in.",
      "Returning from Southampton? We monitor your incoming flight and are at the arrivals hall when you land — no waiting around, no meter running for delays. Pick-up from the set-down zone with meet-and-greet service.",
      "We collect from across the New Forest and surrounding areas — Fordingbridge, Verwood, Burley, Lyndhurst, Brockenhurst, and all of Ringwood — for Southampton Airport transfers. Call for a fixed price.",
    ]}
    includedFeatures={[
      "Fixed price — agreed upfront, no surprises",
      "Flight tracking included on all journeys",
      "Meet and greet at arrivals",
      "Early morning and late night availability",
      "Wheelchair accessible vehicles (WAV) available",
      "Luggage assistance as standard",
    ]}
    nearbyPickups={["Fordingbridge", "Verwood", "Burley", "Lyndhurst", "Brockenhurst", "New Milton", "Wimborne", "Ferndown", "Christchurch"]}
  />
);

export default RingwoodToSouthampton;
