import type { ReactElement } from "react";
import Index from "@/pages/Index";
import DisabledAccess from "@/pages/DisabledAccess";
import AirportTrips from "@/pages/AirportTrips";
import ServiceAreas from "@/pages/ServiceAreas";
import RequestCall from "@/pages/RequestCall";
import RingwoodTaxis from "@/pages/locations/RingwoodTaxis";
import BournemouthTaxis from "@/pages/locations/BournemouthTaxis";
import HampshireTaxis from "@/pages/locations/HampshireTaxis";
import DorsetTaxis from "@/pages/locations/DorsetTaxis";
import FordingbridgeTaxis from "@/pages/locations/FordingbridgeTaxis";
import VerwoodTaxis from "@/pages/locations/VerwoodTaxis";
import FerndownTaxis from "@/pages/locations/FerndownTaxis";
import WimborneTaxis from "@/pages/locations/WimborneTaxis";
import ChristchurchTaxis from "@/pages/locations/ChristchurchTaxis";
import NewMiltonTaxis from "@/pages/locations/NewMiltonTaxis";
import BurleyTaxis from "@/pages/locations/BurleyTaxis";
import LyndhurstTaxis from "@/pages/locations/LyndhurstTaxis";
import LymingtonTaxis from "@/pages/locations/LymingtonTaxis";
import BrockenhurstTaxis from "@/pages/locations/BrockenhurstTaxis";
import NewForestTaxis from "@/pages/locations/NewForestTaxis";
import RingwoodToHeathrow from "@/pages/airports/RingwoodToHeathrow";
import RingwoodToGatwick from "@/pages/airports/RingwoodToGatwick";
import RingwoodToSouthampton from "@/pages/airports/RingwoodToSouthampton";
import RingwoodToBournemouth from "@/pages/airports/RingwoodToBournemouth";

/** Every real page on the site. Also used to prerender each page and build the sitemap. */
export const routes: { path: string; element: ReactElement }[] = [
  { path: "/", element: <Index /> },
  { path: "/disabled-access", element: <DisabledAccess /> },
  { path: "/airport-trips", element: <AirportTrips /> },
  { path: "/service-areas", element: <ServiceAreas /> },
  { path: "/request-a-call", element: <RequestCall /> },
  { path: "/ringwood-taxis", element: <RingwoodTaxis /> },
  { path: "/bournemouth-taxis", element: <BournemouthTaxis /> },
  { path: "/hampshire-taxis", element: <HampshireTaxis /> },
  { path: "/dorset-taxis", element: <DorsetTaxis /> },
  { path: "/taxi-fordingbridge", element: <FordingbridgeTaxis /> },
  { path: "/taxi-verwood", element: <VerwoodTaxis /> },
  { path: "/taxi-ferndown", element: <FerndownTaxis /> },
  { path: "/taxi-wimborne", element: <WimborneTaxis /> },
  { path: "/taxi-christchurch", element: <ChristchurchTaxis /> },
  { path: "/taxi-new-milton", element: <NewMiltonTaxis /> },
  { path: "/taxi-burley", element: <BurleyTaxis /> },
  { path: "/taxi-lyndhurst", element: <LyndhurstTaxis /> },
  { path: "/taxi-lymington", element: <LymingtonTaxis /> },
  { path: "/taxi-brockenhurst", element: <BrockenhurstTaxis /> },
  { path: "/new-forest-taxis", element: <NewForestTaxis /> },
  { path: "/ringwood-to-heathrow-taxi", element: <RingwoodToHeathrow /> },
  { path: "/ringwood-to-gatwick-taxi", element: <RingwoodToGatwick /> },
  { path: "/ringwood-to-southampton-airport-taxi", element: <RingwoodToSouthampton /> },
  { path: "/ringwood-to-bournemouth-airport-taxi", element: <RingwoodToBournemouth /> },
];
