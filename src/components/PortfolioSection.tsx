import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "AI Chat Bot",
      description: "Advanced Telegram bot with GPT-4 integration for natural conversations and task automation",
      tech: ["Python", "OpenAI", "Telegram API"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Automation Bot",
      description: "Multi-purpose Telegram userbot for channel management and content automation",
      tech: ["Python", "Telethon", "Redis"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "AI Image Generator",
      description: "Web application for AI-powered image generation with multiple style presets",
      tech: ["React", "Stable Diffusion", "Node.js"],
      image: "https://images.unsplash.com/photo-1686191128892-3b6c32b3c2f3?w=800&auto=format&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for business metrics and data visualization",
      tech: ["React", "Chart.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Trading Bot",
      description: "Cryptocurrency trading bot with technical analysis and automated strategies",
      tech: ["Python", "Binance API", "ML"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="portfolio" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-purple">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my latest projects and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/80 rounded-full hover:bg-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary/80 rounded-full hover:bg-secondary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-muted rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
