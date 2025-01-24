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
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary inline-block px-6 py-2 rounded-full bg-primary/10 text-sm font-medium mb-6"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-accent mb-6"
          >
            Comprehensive Tech Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From DevOps to Digital Marketing, we provide end-to-end solutions for modern enterprises
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
              className="p-8 rounded-xl bg-white hover:bg-primary/5 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="bg-primary/10 p-4 rounded-lg inline-block mb-6">
                <service.icon className="w-8 h-8 text-primary" />
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