import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Seite nicht gefunden
        </h2>
        <p className="text-muted-foreground mb-8">
          Die gesuchte Seite existiert nicht oder wurde verschoben. 
          Kehren Sie zur Startseite zurück, um fortzufahren.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button data-testid="button-home" className="gap-2">
              <Home className="w-4 h-4" />
              Zur Startseite
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            data-testid="button-back"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Button>
        </div>
      </div>
    </div>
  );
}
