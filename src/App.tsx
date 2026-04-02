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
          <Route path="/ringwood-taxis" element={<RingwoodTaxis />} />
          <Route path="/bournemouth-taxis" element={<BournemouthTaxis />} />
          <Route path="/hampshire-taxis" element={<HampshireTaxis />} />
          <Route path="/dorset-taxis" element={<DorsetTaxis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
