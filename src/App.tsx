
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuantumEngine from "./pages/QuantumEngine";
import EnergyShield from "./pages/EnergyShield";
import AINavigation from "./pages/AINavigation";
import FusionReactor from "./pages/FusionReactor";
import StellarVoyager from "./pages/StellarVoyager";
import QuantumDrive from "./pages/QuantumDrive";
import OrbitalConstructor from "./pages/OrbitalConstructor";
import Articles from "./pages/Articles";
import ArticleQuantumEntanglement from "./pages/ArticleQuantumEntanglement";
import ArticleSpaceshipLife from "./pages/ArticleSpaceshipLife";
import ArticleWarpDrive from "./pages/ArticleWarpDrive";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quantum-engine" element={<QuantumEngine />} />
          <Route path="/energy-shield" element={<EnergyShield />} />
          <Route path="/ai-navigation" element={<AINavigation />} />
          <Route path="/fusion-reactor" element={<FusionReactor />} />
          <Route path="/stellar-voyager" element={<StellarVoyager />} />
          <Route path="/quantum-drive" element={<QuantumDrive />} />
          <Route path="/orbital-constructor" element={<OrbitalConstructor />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/quantum-entanglement" element={<ArticleQuantumEntanglement />} />
          <Route path="/articles/spaceship-life" element={<ArticleSpaceshipLife />} />
          <Route path="/articles/warp-drive" element={<ArticleWarpDrive />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;