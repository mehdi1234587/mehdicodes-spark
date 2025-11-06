import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const BestProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const bestProjects = [
    {
      title: "VPN Platform",
      description: "High-performance VPN solution with advanced security features",
      tech: ["React", "Node.js", "WebRTC"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
      link: "https://vpnsalarian.netlify.app/",
    },
    {
      title: "Premium App 1",
      description: "Enterprise-grade application with cutting-edge features",
      tech: ["Next.js", "TypeScript", "AWS"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
      link: "https://salarian1.netlify.app/",
    },
    {
      title: "Premium App 2",
      description: "Scalable solution built for high-traffic environments",
      tech: ["React", "GraphQL", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
      link: "https://salarian2.netlify.app/",
    },
    {
      title: "Premium App 3",
      description: "AI-powered platform with real-time analytics",
      tech: ["Vue.js", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop",
      link: "https://salarian3.netlify.app/",
    },
  ];

  return (
    <section id="best-projects" ref={ref} className="py-20 px-4 bg-background/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan">Best My Proge</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Featured premium projects with exceptional quality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {bestProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 group h-full">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent/80 rounded-full hover:bg-accent transition-colors inline-flex"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-muted rounded-full border border-accent/30"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/best-projects">
            <Button className="glow-button px-8 py-6 text-lg">
              View All Best Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BestProjectsSection;
