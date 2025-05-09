
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import AnimalsPage from "./pages/AnimalsPage";
import AnimalRegistrationPage from "./pages/AnimalRegistrationPage";
import AdoptionsPage from "./pages/AdoptionsPage";
import VolunteersPage from "./pages/VolunteersPage";
import SchedulePage from "./pages/SchedulePage";
import DonationsPage from "./pages/DonationsPage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/animals" element={<MainLayout><AnimalsPage /></MainLayout>} />
          <Route path="/animals/register" element={<MainLayout><AnimalRegistrationPage /></MainLayout>} />
          <Route path="/adoptions" element={<MainLayout><AdoptionsPage /></MainLayout>} />
          <Route path="/volunteers" element={<MainLayout><VolunteersPage /></MainLayout>} />
          <Route path="/schedule" element={<MainLayout><SchedulePage /></MainLayout>} />
          <Route path="/donations" element={<MainLayout><DonationsPage /></MainLayout>} />
          <Route path="/settings" element={<MainLayout><SettingsPage /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
