import { motion } from "framer-motion";
import { Star, Award, Heart, ThumbsUp } from "lucide-react";

const Rating = () => {
  const stats = [
    { icon: Star, value: "4.9", label: "Star Rating", color: "text-accent" },
    { icon: Heart, value: "500+", label: "Happy Customers", color: "text-primary" },
    { icon: Award, value: "5+", label: "Years Experience", color: "text-accent" },
    { icon: ThumbsUp, value: "100%", label: "Satisfaction", color: "text-primary" },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors card-shadow"
            >
              <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color} ${stat.icon === Star ? 'fill-current' : ''}`} />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rating;
