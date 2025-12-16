import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/paramount-logo.png";

export function ParamountNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Paramount Intelligence" className="h-14 w-auto" />
            <span className="text-xl font-semibold text-foreground tracking-tight">
              Paramount Intelligence
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
