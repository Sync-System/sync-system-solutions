import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-accent via-primary/10 to-background px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary inline-block px-6 py-2 rounded-full bg-primary/10 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            Welcome to Sync System
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-8 leading-tight">
            Transforming Business Through
            <span className="text-primary block mt-2">Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Empowering enterprises with cutting-edge DevOps, AI, and Digital Solutions
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:shadow-primary/20"
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};