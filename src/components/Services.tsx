import { motion } from "framer-motion";
import { Code2, Cloud, Database, Smartphone, Globe, BarChart, Shield, Cpu, Network, Bot, Layers, Brain } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Enterprise DevSecOps",
    description: "Secure CI/CD pipelines with automated security controls and compliance monitoring",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI solutions, ML model development, and intelligent automation systems",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Multi-cloud architecture design and implementation with enterprise-grade security",
  },
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "RPA and cognitive automation for business process optimization",
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Advanced analytics and data engineering solutions for actionable insights",
  },
  {
    icon: Layers,
    title: "Microservices",
    description: "Scalable microservices architecture with container orchestration",
  },
  {
    icon: Network,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategy and implementation",
  },
  {
    icon: Globe,
    title: "Cloud Native Apps",
    description: "Modern cloud-native application development and migration services",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Edge computing solutions for real-time processing and analytics",
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-tech-purple inline-block px-6 py-2 rounded-full bg-tech-purple/10 text-sm font-medium mb-6"
          >
            Enterprise Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-tech-gradient">
              Comprehensive Tech Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Accelerate your digital transformation with our cutting-edge enterprise solutions
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-8 rounded-xl bg-card-gradient backdrop-blur-sm border border-white/10 hover:border-tech-purple/20 transition-all duration-300 group"
            >
              <div className="bg-tech-purple/10 p-4 rounded-lg inline-block mb-6 group-hover:bg-tech-purple/20 transition-colors">
                <service.icon className="w-8 h-8 text-tech-purple" />
              </div>
              <h3 className="text-2xl font-semibold text-accent mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};