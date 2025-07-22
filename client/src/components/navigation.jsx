import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Feiechtechlogo(copy)_1753162037206.png";
import heroVideo from "@assets/6036381_Keyboard_Laptop_3840x2160_1753162786293.mp4";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent overflow-hidden">
      {/* Video Background for Navigation */}
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="FrienchTech Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold">
              <span className="text-[#d96c1e] font-medium">Friench</span>
              <span className="text-white">Tech</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  isActive(link.href)
                    ? "text-[#d96c1e]"
                    : "text-white hover:text-[#d96c1e]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-friench-blue text-white hover:bg-friench-blue/90">
                Contact
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#d96c1e]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-transparent bg-transparent">
            <div className="flex flex-col space-y-4 pt-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-medium ${
                    isActive(link.href)
                      ? "text-[#d96c1e]"
                      : "text-white hover:text-[#d96c1e]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-friench-blue text-white hover:bg-friench-blue/90 w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}