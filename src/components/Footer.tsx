const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <span className="font-brand text-3xl text-primary-foreground">InSain</span>
            <span className="block text-primary-foreground/80 mt-1">Bobbleheads & More</span>
          </div>
          <p className="text-primary-foreground/80 italic mb-6">
            "Where photos turn into memories"
          </p>
          <div className="flex items-center justify-center gap-6 text-primary-foreground/70 text-sm">
            <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
            <a href="#use-cases" className="hover:text-primary-foreground transition-colors">Use Cases</a>
            <a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-6">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} InSain Bobbleheads & More. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
