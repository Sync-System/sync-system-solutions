import { motion } from "framer-motion";
import { Code2, Cloud, Database, Smartphone, Globe, BarChart } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "DevOps & DevSecOps",
    description: "Streamline your development pipeline with secure, automated solutions",
  },
  {
    icon: Database,
    title: "DataOps & MLOps",
    description: "Transform data into actionable insights with our AI-powered solutions",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom e-commerce and enterprise web solutions built for scale",
  },
  {
    icon: Smartphone,
    title: "Native Apps",
    description: "Cross-platform mobile applications with seamless user experience",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "SEO optimization and Google Ads campaigns that drive results",
  },
  {
    icon: BarChart,
    title: "AIOps",
    description: "Intelligent operations automation powered by advanced AI",
  },
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary inline-block px-4 py-1 rounded-full bg-primary/10 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From DevOps to Digital Marketing, we provide end-to-end solutions for modern enterprises
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-muted hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-accent mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};