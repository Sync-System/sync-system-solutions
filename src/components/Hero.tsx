import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-muted px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary inline-block px-4 py-1 rounded-full bg-primary/10 text-sm font-medium mb-6">
            Welcome to Sync System
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6">
            Transforming Business Through
            <span className="text-primary"> Technology</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Empowering enterprises with cutting-edge DevOps, AI, and Digital Solutions
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Explore Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};