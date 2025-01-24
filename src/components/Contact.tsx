import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-tech-dark to-tech-purple/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-tech-purple inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
          >
            Contact Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Start Your Digital Transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Let's discuss how our enterprise solutions can accelerate your business growth
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-center p-8 bg-card-gradient backdrop-blur-sm rounded-xl border border-white/10 group hover:border-tech-purple/20"
          >
            <div className="bg-tech-purple/20 p-4 rounded-full mb-6 group-hover:bg-tech-purple/30 transition-colors">
              <Mail className="w-8 h-8 text-tech-purple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
            <p className="text-white/80 text-center">contact@syncsystem.us</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-center p-8 bg-card-gradient backdrop-blur-sm rounded-xl border border-white/10 group hover:border-tech-purple/20"
          >
            <div className="bg-tech-purple/20 p-4 rounded-full mb-6 group-hover:bg-tech-purple/30 transition-colors">
              <Phone className="w-8 h-8 text-tech-purple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
            <p className="text-white/80 text-center">+1 (555) 123-4567</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-center p-8 bg-card-gradient backdrop-blur-sm rounded-xl border border-white/10 group hover:border-tech-purple/20"
          >
            <div className="bg-tech-purple/20 p-4 rounded-full mb-6 group-hover:bg-tech-purple/30 transition-colors">
              <MapPin className="w-8 h-8 text-tech-purple" />
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
          <button className="inline-flex items-center gap-2 bg-glow-gradient text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};