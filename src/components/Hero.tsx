import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-hero-pattern px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm inline-flex items-center gap-2">
              <Shield className="w-4 h-4" /> Enterprise-Grade Solutions
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-8 leading-tight">
            Transform Your Business With
            <span className="bg-clip-text text-transparent bg-tech-gradient block mt-2">
              Next-Gen Technology
            </span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Empowering enterprises with cutting-edge DevOps, AI, and Cloud Solutions for the digital age
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:shadow-primary/20 flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-accent px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-colors border border-accent/10"
            >
              Learn More
            </motion.button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-accent/10"
            >
              <div className="bg-primary/10 p-3 rounded-lg">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-accent">Cloud Native</h3>
                <p className="text-sm text-muted-foreground">Scalable Infrastructure</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-accent/10"
            >
              <div className="bg-primary/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-accent">DevSecOps</h3>
                <p className="text-sm text-muted-foreground">Security First</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-accent/10"
            >
              <div className="bg-primary/10 p-3 rounded-lg">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-accent">AI & MLOps</h3>
                <p className="text-sm text-muted-foreground">Intelligent Solutions</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};