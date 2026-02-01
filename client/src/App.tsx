import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/LanguageContext";
import { lazy, Suspense } from "react";
import CookieBanner from "@/components/CookieBanner";
import { urlPaths } from "@/lib/urlTranslations";
import { navigate } from "wouter/use-browser-location";
import { useMemo } from "react";

interface AppProps {
  ssrUrl?: string;
}

// Critical: Home page loaded eagerly
import Home from "@/pages/home";

// Lazy load all other pages for better performance
const NotFound = lazy(() => import("@/pages/not-found"));
const KVKK = lazy(() => import("@/pages/kvkk"));
const Gizlilik = lazy(() => import("@/pages/gizlilik"));
const CerezPolitikasi = lazy(() => import("@/pages/cerez-politikasi"));
const Sartlar = lazy(() => import("@/pages/sartlar"));
const MesafeliSatis = lazy(() => import("@/pages/mesafeli-satis"));
const OnBilgilendirme = lazy(() => import("@/pages/on-bilgilendirme"));
const UeberUns = lazy(() => import("@/pages/ueber-uns"));
const Systeme = lazy(() => import("@/pages/systeme"));
const Vorteile = lazy(() => import("@/pages/vorteile"));
const Rechner = lazy(() => import("@/pages/rechner"));
const FAQ = lazy(() => import("@/pages/faq"));
const GunesPaneli = lazy(() => import("@/pages/gunes-paneli"));
const IsiPompasi = lazy(() => import("@/pages/isi-pompasi"));
const Klima = lazy(() => import("@/pages/klima"));
const EnerjiDepolama = lazy(() => import("@/pages/enerji-depolama"));
const Standorte = lazy(() => import("@/pages/standorte"));
const InstallationAntalya = lazy(() => import("@/pages/installation-antalya"));
const InstallationAnkara = lazy(() => import("@/pages/installation-ankara"));
const InstallationAlanya = lazy(() => import("@/pages/installation-alanya"));

// Minimal loading spinner for lazy loaded pages
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Routes() {
  return (
    <Suspense fallback={<PageLoader />}>
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
        
        {/* Energy Storage pages - all languages */}
        {Object.values(urlPaths).map(paths => paths.batteryStorage).filter((v, i, a) => a.indexOf(v) === i).map(path => (
          <Route key={path} path={path} component={EnerjiDepolama} />
        ))}
        
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App({ ssrUrl }: AppProps) {
  const ssrHook = useMemo(() => {
    if (ssrUrl) {
      return (): [string, (path: string) => void] => [ssrUrl, navigate];
    }
    return undefined;
  }, [ssrUrl]);

  const RouterWrapper = ssrHook ? 
    ({ children }: { children: React.ReactNode }) => <WouterRouter hook={ssrHook}>{children}</WouterRouter> : 
    ({ children }: { children: React.ReactNode }) => <>{children}</>;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <RouterWrapper>
            <Routes />
            <CookieBanner />
            <Toaster />
          </RouterWrapper>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
