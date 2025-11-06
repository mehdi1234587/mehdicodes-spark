import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const BestProjects = () => {
  const bestProjects = [
    { title: "VPN Platform", link: "https://vpnsalarian.netlify.app/", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop", description: "High-performance VPN solution with advanced security" },
    { title: "Premium App 1", link: "https://salarian1.netlify.app/", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop", description: "Enterprise-grade application" },
    { title: "Premium App 2", link: "https://salarian2.netlify.app/", image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop", description: "Scalable high-traffic solution" },
    { title: "Premium App 3", link: "https://salarian3.netlify.app/", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop", description: "AI-powered analytics platform" },
    { title: "Premium App 4", link: "https://salarian4.netlify.app/", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", description: "Real-time data processing" },
    { title: "Premium App 5", link: "https://salarian5.netlify.app/", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", description: "Cloud-native architecture" },
    { title: "Premium App 6", link: "https://salarian6.netlify.app/", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop", description: "Microservices ecosystem" },
    { title: "Premium App 7", link: "https://salarian7.netlify.app/", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop", description: "Blockchain integration" },
    { title: "Premium App 8", link: "https://salarian8.netlify.app/", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop", description: "Machine learning pipeline" },
    { title: "Premium App 9", link: "https://salarian9.netlify.app/", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop", description: "IoT management system" },
  ];

  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link to="/">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-cyan">Best My Proge</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-secondary mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl">
              Showcasing my finest work - premium projects with exceptional quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
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
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BestProjects;
