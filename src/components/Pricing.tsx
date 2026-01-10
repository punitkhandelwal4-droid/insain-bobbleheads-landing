import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
const Pricing = () => {
  const features = ["Custom sculpted from your photo", "Hand-painted with premium colors", "Premium packaging for safety", "Lifetime durability guarantee", "Free revisions before final", "Express delivery available"];
  return <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Affordable <span className="text-primary">Customization</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            High-quality, handcrafted bobbleheads at prices that won't break the bank.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-lg mx-auto">
          <div className="relative bg-card rounded-3xl border-2 border-primary p-8 md:p-10 card-shadow overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-muted-foreground text-xl">Starting from</span>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-foreground">$20</span>
                  <span className="text-muted-foreground text-lg">/ piece</span>
                </div>
                <p className="text-muted-foreground mt-2">Price varies based on complexity</p>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map(feature => <li key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>)}
              </ul>

              <a href="#contact" className="block w-full btn-primary-gradient text-primary-foreground py-4 rounded-full font-semibold text-lg text-center hover:opacity-90 transition-all hover:scale-[1.02]">
                Get Your Custom Quote
              </a>
              
              <p className="text-center text-muted-foreground text-sm mt-4">
                ✓ No hidden fees • ✓ Pay after approval
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Pricing;