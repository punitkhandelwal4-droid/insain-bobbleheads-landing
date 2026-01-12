import { motion } from "framer-motion";
import { MessageCircle, Phone, Instagram, Globe, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const whatsappNumber = "+919079753204";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Submit to Netlify Forms
    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append("form-name", "contact");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("whatsapp", formData.whatsapp);
      formDataToSend.append("requirements", formData.requirements);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToSend.toString()
      });

      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission received",
        description: "Redirecting to WhatsApp...",
      });
    }

    // Also redirect to WhatsApp
    const message = `Hi! I'm interested in a custom bobblehead.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A*Requirements:* ${encodeURIComponent(formData.requirements)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    setFormData({ name: "", email: "", whatsapp: "", requirements: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
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
        }} className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Ready to Create Your <span className="text-primary">Bobblehead</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form below or reach out to us on WhatsApp for the fastest response!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
            <div className="bg-card rounded-3xl p-8 border border-border card-shadow h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us Your Requirements</h3>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input id="name" name="name" type="text" required placeholder="John Doe" value={formData.name} onChange={handleChange} className="rounded-xl" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} className="rounded-xl" />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp Number *
                  </label>
                  <Input id="whatsapp" name="whatsapp" type="tel" required placeholder="+91 9876543210" value={formData.whatsapp} onChange={handleChange} className="rounded-xl" />
                </div>
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-foreground mb-2">
                    Your Requirements *
                  </label>
                  <Textarea id="requirements" name="requirements" required placeholder="Tell us about your custom bobblehead idea - occasion, style, number of figures, etc." value={formData.requirements} onChange={handleChange} className="rounded-xl min-h-[120px]" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full btn-gold-gradient text-accent-foreground py-6 rounded-full font-semibold text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </motion.div>

          {/* WhatsApp & Social */}
          <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
            <div className="bg-card rounded-3xl p-8 border border-border card-shadow h-full flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
                  <MessageCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Or WhatsApp Us Directly</h3>
                <p className="text-muted-foreground">Get quick replies and share your photos easily</p>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold text-lg transition-all hover:scale-[1.02] mb-6">
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>

              <div className="flex items-center justify-center gap-2 text-foreground font-semibold text-lg mb-8">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91-9079753204</span>
              </div>

              <div className="border-t border-border pt-6 mt-auto">
                <p className="text-center text-muted-foreground mb-4">Follow us for updates & new designs</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="https://instagram.com/bobbleheadsandmore" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">
                    <Instagram className="w-5 h-5" />
                    @bobbleheadsandmore
                  </a>
                  <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity" href="https://www.insaincrafts.com">
                    <Globe className="w-5 h-5" />
                    insaincrafts.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
