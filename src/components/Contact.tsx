import { motion } from "framer-motion";
import { MessageCircle, Phone, Instagram, Globe } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "+919079753204";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Ready to Create Your <span className="text-primary">Bobblehead</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach out to us on WhatsApp for the fastest response. We'd love to hear about your ideas!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border card-shadow">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">WhatsApp Us Directly</h3>
              <p className="text-muted-foreground">Get quick replies and share your photos easily</p>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold text-lg transition-all hover:scale-[1.02] mb-6"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>

            <div className="flex items-center justify-center gap-2 text-foreground font-semibold text-lg mb-8">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91-9079753204</span>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-center text-muted-foreground mb-4">Follow us for updates & new designs</p>
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://instagram.com/bobbleheadsandmore" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                  @bobbleheadsandmore
                </a>
                <a 
                  href="https://www.insain.in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  <Globe className="w-5 h-5" />
                  insain.in
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
