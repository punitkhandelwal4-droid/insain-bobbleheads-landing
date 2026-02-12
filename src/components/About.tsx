import { motion } from "framer-motion";
import { Clock, Palette, Package, Sparkles } from "lucide-react";

const About = () => {
  const features = [
  {
    icon: Palette,
    title: "Handcrafted Art",
    description: "Each bobblehead is meticulously sculpted and painted by skilled artisans."
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising on quality. Your masterpiece delivered on time."
  },
  {
    icon: Package,
    title: "Premium Packaging",
    description: "Every piece arrives in beautiful, secure packaging ready to gift."
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Made with high quality poly resin for exceptional durability and detail."
  }];


  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Where Photos Turn Into <span className="text-primary">Memories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            For over <strong className="text-foreground">5 years</strong>, we've been transforming cherished photographs into stunning, 
            handcrafted bobbleheads. What started as a passion project has grown into a trusted 
            brand serving customers across the globe. Each piece tells a story—your story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 card-shadow hover:-translate-y-1">

              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Every Bobblehead is Handcrafted with Care ❤️
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">Minor variations are natural and are what make each piece truly one of a kind. That's not a flaw—that's character!!


          </p>
        </motion.div>
      </div>
    </section>);

};

export default About;