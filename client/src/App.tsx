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
import InstallationAnkara from "@/pages/installation-ankara";
import InstallationAlanya from "@/pages/installation-alanya";
import CookieBanner from "@/components/CookieBanner";
import { urlPaths } from "@/lib/urlTranslations";

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
      
      {/* About pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.about).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={UeberUns} />
      ))}
      
      {/* System pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.system).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={Systeme} />
      ))}
      
      {/* Benefits pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.benefits).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={Vorteile} />
      ))}
      
      {/* Calculator pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.calculator).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={Rechner} />
      ))}
      
      {/* FAQ pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.faq).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={FAQ} />
      ))}
      
      {/* Locations pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.locations).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={Standorte} />
      ))}
      
      {/* Installation Antalya - all languages */}
      {Object.values(urlPaths).map(paths => paths.installationAntalya).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={InstallationAntalya} />
      ))}
      
      {/* Installation Ankara - all languages */}
      {Object.values(urlPaths).map(paths => paths.installationAnkara).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={InstallationAnkara} />
      ))}
      
      {/* Installation Alanya - all languages */}
      {Object.values(urlPaths).map(paths => paths.installationAlanya).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={InstallationAlanya} />
      ))}
      
      {/* Solar Panel pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.solarPanel).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={GunesPaneli} />
      ))}
      
      {/* Heat Pump pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.heatPump).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={IsiPompasi} />
      ))}
      
      {/* Air Conditioning pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.airConditioning).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={Klima} />
      ))}
      
      {/* Battery Storage pages - all languages */}
      {Object.values(urlPaths).map(paths => paths.batteryStorage).filter((v, i, a) => a.indexOf(v) === i).map(path => (
        <Route key={path} path={path} component={EnerjiDepolama} />
      ))}
      
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
