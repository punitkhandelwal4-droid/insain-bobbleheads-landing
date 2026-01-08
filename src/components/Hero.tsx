import { motion } from "framer-motion";
import heroBobbleheads from "@/assets/hero-bobbleheads.png";
import { Star } from "lucide-react";
const Hero = () => {
  return <section className="hero-gradient min-h-screen pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-6">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Handcrafted with Love
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Turn Your Photos Into
            <span className="block text-primary mt-2 font-mono">Unforgettable Bobbleheads</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom-made, one-of-a-kind bobbleheads that capture personalities and create lasting memories. Perfect for any occasion!
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none z-10" />
          <img src={heroBobbleheads} alt="Collection of custom bobbleheads" className="w-full max-w-5xl mx-auto rounded-2xl card-shadow" />
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="btn-primary-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg">
            Start Creating Now
          </a>
          <a href="#about" className="bg-card text-foreground px-8 py-4 rounded-full font-semibold text-lg border-2 border-border hover:border-primary transition-all hover:scale-105">
            Learn More
          </a>
        </motion.div>

        {/* Trust Badge */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }} className="mt-10 flex items-center justify-center gap-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(star => <Star key={star} className={`w-5 h-5 ${star <= 4 ? 'fill-accent text-accent' : 'fill-accent/80 text-accent'}`} />)}
          </div>
          <span className="text-foreground font-semibold">4.9</span>
          <span className="text-muted-foreground">• Trusted by 500+ Happy Customers</span>
        </motion.div>
      </div>
    </section>;
};
export default Hero;