import { motion } from "framer-motion";
import { Gift, Cake, Heart, Briefcase, PartyPopper, GraduationCap } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Cake,
      title: "Birthday Gifts",
      description: "Surprise loved ones with a personalized mini-me that captures their essence.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Heart,
      title: "Anniversary Presents",
      description: "Celebrate your love story with couple bobbleheads that last forever.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Briefcase,
      title: "Corporate Gifts",
      description: "Impress clients and reward employees with unique executive bobbleheads.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: PartyPopper,
      title: "Wedding Favors",
      description: "Create memorable keepsakes for your special day that guests will treasure.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Graduation Gifts",
      description: "Honor achievements with a custom bobblehead in cap and gown.",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: Gift,
      title: "Farewell Presents",
      description: "Say goodbye in style with a memorable token of appreciation.",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Perfect For</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Every Occasion <span className="text-primary">Deserves</span> a Bobblehead
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From personal milestones to professional achievements, our bobbleheads make every moment unforgettable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl ${useCase.color} flex items-center justify-center mb-4`}>
                <useCase.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
