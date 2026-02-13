import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/insain-logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact Us" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logoImage} alt="InSain" className="h-10 md:h-12 w-auto mix-blend-multiply" />
          <span className="text-foreground font-semibold text-lg md:text-xl">Bobbleheads & More</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 4).map((link) => (
            <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors font-medium">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold-gradient text-accent-foreground px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Contact Us
          </a>
        </nav>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 border-b border-border/50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
export default Header;