import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-brand text-2xl md:text-3xl text-primary">InSain</span>
          <span className="text-sm md:text-base text-muted-foreground font-medium">Bobbleheads & More</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">About</a>
          <a href="#use-cases" className="text-foreground/80 hover:text-primary transition-colors font-medium">Use Cases</a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors font-medium">Pricing</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors font-medium">Reviews</a>
          <a href="#contact" className="btn-gold-gradient text-accent-foreground px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Contact Us
          </a>
        </nav>
        <a href="#contact" className="md:hidden btn-gold-gradient text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm">
          Contact
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
