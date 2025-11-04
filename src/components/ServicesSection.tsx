import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Globe, Brain, Zap, Code, Cpu } from "lucide-react";
import { Card } from "./ui/card";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Bot,
      title: "Telegram Bots Development",
      description: "Custom Telegram bots for automation, AI assistants, and business solutions. From simple userbots to complex multi-functional systems.",
      gradient: "from-primary to-primary/70",
      glow: "box-glow-cyan",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with React, Next.js, and cutting-edge technologies. Fast, beautiful, and optimized for performance.",
      gradient: "from-secondary to-secondary/70",
      glow: "box-glow-magenta",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Integrate powerful AI capabilities into your applications. ChatGPT, image generation, sentiment analysis, and custom ML models.",
      gradient: "from-accent to-accent/70",
      glow: "box-glow-purple",
    },
    {
      icon: Zap,
      title: "Automation Solutions",
      description: "Streamline your workflow with custom automation tools. Save time and increase productivity with intelligent automation.",
      gradient: "from-primary to-accent",
      glow: "box-glow-cyan",
    },
    {
      icon: Code,
      title: "API Development",
      description: "RESTful APIs and backend services built with Node.js. Secure, scalable, and well-documented APIs for any use case.",
      gradient: "from-secondary to-primary",
      glow: "box-glow-magenta",
    },
    {
      icon: Cpu,
      title: "Full-Stack Solutions",
      description: "End-to-end development services. From database design to frontend implementation, delivering complete solutions.",
      gradient: "from-accent to-secondary",
      glow: "box-glow-purple",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-magenta">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive development services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className={`p-6 h-full bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 ${service.glow} hover:${service.glow}`}>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                  <service.icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
