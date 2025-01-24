import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-tech-dark to-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Start Your Digital Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Ready to transform your business? Contact us to discuss your technology needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <div className="bg-primary/20 p-4 rounded-full mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
            <p className="text-white/80 text-center">contact@syncsystem.us</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <div className="bg-primary/20 p-4 rounded-full mb-6">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
            <p className="text-white/80 text-center">+1 (555) 123-4567</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <div className="bg-primary/20 p-4 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
            <p className="text-white/80 text-center">United States</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};