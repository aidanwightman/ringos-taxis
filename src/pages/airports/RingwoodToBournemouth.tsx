import AirportRoutePage from "./AirportRoutePage";

const RingwoodToBournemouth = () => (
  <AirportRoutePage
    pageTitle="Ringwood to Bournemouth Airport Taxi | Fixed Price Transfer — Ringo's Taxis"
    metaDescription="Need a taxi from Ringwood to Bournemouth Airport? Ringo's Taxis offers fixed-price transfers in ~25 minutes. Flight tracking included. Call 07387 777202 to book."
    h1="Ringwood to Bournemouth Airport Taxi"
    fromLocation="Ringwood"
    toAirport="Bournemouth Airport"
    airportCode="BOH"
    approxTime="~25 min"
    introParagraph="The closest airport to Ringwood. Fixed-price taxi to Bournemouth Airport in just 25 minutes — door-to-door, with flight tracking included."
    bodyParagraphs={[
      "Bournemouth Airport (BOH) is just 25 minutes from Ringwood, making it the most convenient airport for most of our customers. Ringo's Taxis provides fast, fixed-price transfers between Ringwood and Bournemouth Airport — day or night.",
      "Bournemouth Airport operates flights across the UK and Europe. We pre-book your taxi, arrive at your door on time, and have you at the terminal well before check-in closes. No meter, no uncertainty — just a clear, agreed price.",
      "Arriving at Bournemouth Airport? We track your flight and collect you from the arrivals area the moment you're through. No waiting charges for flight delays — we adjust and arrive when you land.",
      "We also cover airport transfers from Ferndown, Verwood, Wimborne, Christchurch, Ringwood, and all surrounding areas to Bournemouth Airport. Call 07387 777202 for a fixed quote.",
    ]}
    includedFeatures={[
      "Fixed price — agreed upfront, no meter",
      "Flight tracking on all journeys",
      "Meet and greet at Bournemouth Airport arrivals",
      "Early morning and late night availability",
      "Wheelchair accessible vehicles (WAV) available",
      "Closest airport transfer option from Ringwood",
    ]}
    nearbyPickups={["Ferndown", "Verwood", "Wimborne", "Christchurch", "New Milton", "Fordingbridge", "Burley", "Bransgore", "West Moors"]}
  />
);

export default RingwoodToBournemouth;
