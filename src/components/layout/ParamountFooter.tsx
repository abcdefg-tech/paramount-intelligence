import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/paramount-logo.png";

export function ParamountFooter() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Paramount Intelligence" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-foreground tracking-tight">
              Paramount Intelligence
            </span>
          </Link>

          {/* Social */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Paramount Intelligence. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
