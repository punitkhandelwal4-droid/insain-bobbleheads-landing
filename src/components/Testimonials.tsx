import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Birthday Gift",
      content: "Ordered a bobblehead for my wife's 40th birthday. She was absolutely blown away! The attention to detail is incredible—they even got her signature pose right!",
      rating: 5
    },
    {
      name: "Priya Singh",
      role: "Corporate Gift",
      content: "We ordered 20 bobbleheads for our top performers. The team at InSain was so professional and delivered on time. Everyone loved their mini-me!",
      rating: 5
    },
    {
      name: "Arun Patel",
      role: "Wedding Favor",
      content: "Our wedding guests couldn't stop talking about the couple bobbleheads we gave as favors. Such a unique and memorable touch to our special day!",
      rating: 5
    },
    {
      name: "Anjali Sharma",
      role: "Anniversary Gift",
      content: "Surprised my parents with bobbleheads for their 25th anniversary. Mom cried happy tears! Worth every penny spent. Highly recommend!",
      rating: 5
    },
    {
      name: "Vikram Desai",
      role: "Farewell Gift",
      content: "Gave my boss a bobblehead on his farewell. The resemblance was uncanny! He said it's his favorite gift ever. Great communication throughout the process.",
      rating: 5
    },
    {
      name: "Neha Gupta",
      role: "Graduation Gift",
      content: "My daughter's graduation bobblehead in her cap and gown is now the centerpiece of our living room. Beautiful craftsmanship!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it—hear from the hundreds of happy customers who've turned their photos into treasured keepsakes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
