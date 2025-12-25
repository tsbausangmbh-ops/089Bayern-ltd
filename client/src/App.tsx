import { Switch, Route, Redirect } from "wouter";
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
import InstallationAnkara from "@/pages/installation-ankara";
import InstallationAlanya from "@/pages/installation-alanya";
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
      {/* Türkische URLs (Haupt) */}
      <Route path="/hakkimizda" component={UeberUns} />
      <Route path="/sistem" component={Systeme} />
      <Route path="/avantajlar" component={Vorteile} />
      <Route path="/hesaplayici" component={Rechner} />
      <Route path="/sss" component={FAQ} />
      <Route path="/bolgeler" component={Standorte} />
      <Route path="/kurulum-antalya" component={InstallationAntalya} />
      <Route path="/kurulum-ankara" component={InstallationAnkara} />
      <Route path="/kurulum-alanya" component={InstallationAlanya} />
      {/* Deutsche URLs (Weiterleitungen) */}
      <Route path="/ueber-uns">{() => <Redirect to="/hakkimizda" />}</Route>
      <Route path="/systeme">{() => <Redirect to="/sistem" />}</Route>
      <Route path="/vorteile">{() => <Redirect to="/avantajlar" />}</Route>
      <Route path="/rechner">{() => <Redirect to="/hesaplayici" />}</Route>
      <Route path="/faq">{() => <Redirect to="/sss" />}</Route>
      <Route path="/standorte">{() => <Redirect to="/bolgeler" />}</Route>
      <Route path="/installation-antalya">{() => <Redirect to="/kurulum-antalya" />}</Route>
      <Route path="/installation-ankara">{() => <Redirect to="/kurulum-ankara" />}</Route>
      <Route path="/installation-alanya">{() => <Redirect to="/kurulum-alanya" />}</Route>
      {/* Komponenten-Seiten (bereits türkisch) */}
      <Route path="/gunes-paneli" component={GunesPaneli} />
      <Route path="/isi-pompasi" component={IsiPompasi} />
      <Route path="/klima" component={Klima} />
      <Route path="/enerji-depolama" component={EnerjiDepolama} />
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
