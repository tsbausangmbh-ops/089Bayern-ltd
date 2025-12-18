import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import KVKK from "@/pages/kvkk";
import Gizlilik from "@/pages/gizlilik";
import CerezPolitikasi from "@/pages/cerez-politikasi";
import Sartlar from "@/pages/sartlar";
import MesafeliSatis from "@/pages/mesafeli-satis";
import OnBilgilendirme from "@/pages/on-bilgilendirme";
import UeberUns from "@/pages/ueber-uns";
import Systeme from "@/pages/systeme";
import Vorteile from "@/pages/vorteile";
import Rechner from "@/pages/rechner";
import FAQ from "@/pages/faq";
import GunesPaneli from "@/pages/gunes-paneli";
import IsiPompasi from "@/pages/isi-pompasi";
import Klima from "@/pages/klima";
import EnerjiDepolama from "@/pages/enerji-depolama";
import Standorte from "@/pages/standorte";
import InstallationAntalya from "@/pages/installation-antalya";
import CookieBanner from "@/components/CookieBanner";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/kvkk" component={KVKK} />
      <Route path="/gizlilik" component={Gizlilik} />
      <Route path="/cerez-politikasi" component={CerezPolitikasi} />
      <Route path="/sartlar" component={Sartlar} />
      <Route path="/mesafeli-satis" component={MesafeliSatis} />
      <Route path="/on-bilgilendirme" component={OnBilgilendirme} />
      <Route path="/ueber-uns" component={UeberUns} />
      <Route path="/systeme" component={Systeme} />
      <Route path="/vorteile" component={Vorteile} />
      <Route path="/rechner" component={Rechner} />
      <Route path="/faq" component={FAQ} />
      <Route path="/gunes-paneli" component={GunesPaneli} />
      <Route path="/isi-pompasi" component={IsiPompasi} />
      <Route path="/klima" component={Klima} />
      <Route path="/enerji-depolama" component={EnerjiDepolama} />
      <Route path="/standorte" component={Standorte} />
      <Route path="/installation-antalya" component={InstallationAntalya} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieBanner />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
