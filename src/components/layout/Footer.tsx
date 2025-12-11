import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";
const footerLinks = {
  company: [{
    name: "About Us",
    path: "/about"
  }, {
    name: "Contact",
    path: "/contact"
  }],
  services: [{
    name: "AI Development",
    path: "/services"
  }, {
    name: "Automation & RPA",
    path: "/services"
  }, {
    name: "Machine Learning",
    path: "/services"
  }, {
    name: "Data Analytics",
    path: "/services"
  }],
  resources: [{
    name: "Case Studies",
    path: "/case-studies"
  }, {
    name: "FAQ",
    path: "/contact"
  }]
};
export function Footer() {
  return <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Paramount Intelligence" className="h-10 w-10 rounded-lg" />
              <span className="text-xl font-bold text-primary-foreground">
                Paramount <span className="text-muted">Intelligence</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-primary-foreground">
          </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span className="text-primary-foreground">123 Innovation Drive, Tech City, TC 10001</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span className="text-primary-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span className="text-primary-foreground">contact@paramountintel.com</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-primary-foreground">
            <h4 className="font-semibold mb-4 text-primary-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name} className="text-primary-foreground">
                  <Link to={link.path} className="transition-colors text-primary-foreground">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.path} className="transition-colors text-primary-foreground">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => <li key={link.name}>
                  <Link to={link.path} className="transition-colors text-primary-foreground">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground">© 2025 Paramount Intelligence. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            
            
            
          </div>
        </div>
      </div>
    </footer>;
}