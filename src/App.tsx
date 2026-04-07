import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DisabledAccess from "./pages/DisabledAccess";
import AirportTrips from "./pages/AirportTrips";
import ServiceAreas from "./pages/ServiceAreas";
import RequestCall from "./pages/RequestCall";
import NotFound from "./pages/NotFound";
import RingwoodTaxis from "./pages/locations/RingwoodTaxis";
import BournemouthTaxis from "./pages/locations/BournemouthTaxis";
import HampshireTaxis from "./pages/locations/HampshireTaxis";
import DorsetTaxis from "./pages/locations/DorsetTaxis";
import FordingbridgeTaxis from "./pages/locations/FordingbridgeTaxis";
import VerwoodTaxis from "./pages/locations/VerwoodTaxis";
import FerndownTaxis from "./pages/locations/FerndownTaxis";
import WimborneTaxis from "./pages/locations/WimborneTaxis";
import ChristchurchTaxis from "./pages/locations/ChristchurchTaxis";
import NewMiltonTaxis from "./pages/locations/NewMiltonTaxis";
import BurleyTaxis from "./pages/locations/BurleyTaxis";
import LyndhurstTaxis from "./pages/locations/LyndhurstTaxis";
import LymingtonTaxis from "./pages/locations/LymingtonTaxis";
import BrockenhurstTaxis from "./pages/locations/BrockenhurstTaxis";
import NewForestTaxis from "./pages/locations/NewForestTaxis";
import RingwoodToHeathrow from "./pages/airports/RingwoodToHeathrow";
import RingwoodToGatwick from "./pages/airports/RingwoodToGatwick";
import RingwoodToSouthampton from "./pages/airports/RingwoodToSouthampton";
import RingwoodToBournemouth from "./pages/airports/RingwoodToBournemouth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/disabled-access" element={<DisabledAccess />} />
          <Route path="/airport-trips" element={<AirportTrips />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/request-a-call" element={<RequestCall />} />

          {/* Location pages */}
          <Route path="/ringwood-taxis" element={<RingwoodTaxis />} />
          <Route path="/bournemouth-taxis" element={<BournemouthTaxis />} />
          <Route path="/hampshire-taxis" element={<HampshireTaxis />} />
          <Route path="/dorset-taxis" element={<DorsetTaxis />} />
          <Route path="/taxi-fordingbridge" element={<FordingbridgeTaxis />} />
          <Route path="/taxi-verwood" element={<VerwoodTaxis />} />
          <Route path="/taxi-ferndown" element={<FerndownTaxis />} />
          <Route path="/taxi-wimborne" element={<WimborneTaxis />} />
          <Route path="/taxi-christchurch" element={<ChristchurchTaxis />} />
          <Route path="/taxi-new-milton" element={<NewMiltonTaxis />} />
          <Route path="/taxi-burley" element={<BurleyTaxis />} />
          <Route path="/taxi-lyndhurst" element={<LyndhurstTaxis />} />
          <Route path="/taxi-lymington" element={<LymingtonTaxis />} />
          <Route path="/taxi-brockenhurst" element={<BrockenhurstTaxis />} />
          <Route path="/new-forest-taxis" element={<NewForestTaxis />} />

          {/* Airport route pages */}
          <Route path="/ringwood-to-heathrow-taxi" element={<RingwoodToHeathrow />} />
          <Route path="/ringwood-to-gatwick-taxi" element={<RingwoodToGatwick />} />
          <Route path="/ringwood-to-southampton-airport-taxi" element={<RingwoodToSouthampton />} />
          <Route path="/ringwood-to-bournemouth-airport-taxi" element={<RingwoodToBournemouth />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
