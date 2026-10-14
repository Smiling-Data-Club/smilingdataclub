import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import NotFound from "./pages/NotFound.tsx";
import Game from "./pages/Game.tsx";
import Auswertung from "./pages/Auswertung.tsx";
import Loesung from "./pages/loesungen/Loesung.tsx";
import CultureCode26 from "./pages/events/CultureCode26.tsx";
import CultureCode27 from "./pages/events/CultureCode27.tsx";
import Termine from "./pages/events/Termine.tsx";
import UeberUns from "./pages/ueber-uns/UeberUns.tsx";
import Team from "./pages/ueber-uns/Team.tsx";
import Member from "./pages/Member.tsx";
import ScrollManager from "./components/ScrollManager.tsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/auswertung" element={<Auswertung />} />
          <Route path="/loesungen/:slug" element={<Loesung />} />
          <Route path="/events/culture-and-code-26" element={<CultureCode26 />} />
          <Route path="/events/culture-and-code-27" element={<CultureCode27 />} />
          <Route path="/events/termine" element={<Termine />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/ueber-uns/team" element={<Team />} />
          <Route path="/member" element={<Member />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
