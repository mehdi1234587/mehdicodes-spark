import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const AllProjects = () => {
  const projects = [
    { title: "Project 0", link: "https://salarian00.netlify.app/", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", description: "Innovative web solution" },
    { title: "Project 1", link: "https://salarian01.netlify.app/", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop", description: "Modern web application" },
    { title: "Project 2", link: "https://salarian02.netlify.app/", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop", description: "Full-stack platform" },
    { title: "Project 3", link: "https://salarian03.netlify.app/", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop", description: "Enterprise solution" },
    { title: "Project 4", link: "https://salarian04.netlify.app/", image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop", description: "AI-powered app" },
    { title: "Project 5", link: "https://salarian05.netlify.app/", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop", description: "Real-time dashboard" },
    { title: "Project 6", link: "https://salarian06.netlify.app/", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop", description: "Interactive platform" },
    { title: "Project 7", link: "https://salarian07.netlify.app/", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", description: "Analytics system" },
    { title: "Project 8", link: "https://salarian08.netlify.app/", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop", description: "Developer tools" },
    { title: "Project 9", link: "https://salarian09.netlify.app/", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop", description: "Web automation" },
    { title: "Project 10", link: "https://salarian10.netlify.app/", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop", description: "Mobile-first design" },
    { title: "Project 11", link: "https://salarian11.netlify.app/", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop", description: "E-commerce platform" },
    { title: "Project 12", link: "https://salarian12.netlify.app/", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop", description: "Content management" },
    { title: "Project 13", link: "https://salarian13.netlify.app/", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop", description: "Social network" },
    { title: "Project 14", link: "https://salarian14.netlify.app/", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop", description: "Booking system" },
    { title: "Project 15", link: "https://salarian15.netlify.app/", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop", description: "Data visualization" },
    { title: "Project 16", link: "https://salarian16.netlify.app/", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop", description: "Collaboration tool" },
    { title: "Project 17", link: "https://salarian17.netlify.app/", image: "https://images.unsplash.com/photo-1488590281505-e66aaa45b7dd?w=800&auto=format&fit=crop", description: "Project management" },
    { title: "Project 18", link: "https://salarian18.netlify.app/", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop", description: "Task automation" },
    { title: "Project 19", link: "https://salarian19.netlify.app/", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop", description: "API integration" },
    { title: "Project 20", link: "https://salarian20.netlify.app/", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop", description: "Payment gateway" },
    { title: "Project 21", link: "https://salarian21.netlify.app/", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop", description: "Communication hub" },
    { title: "Project 22", link: "https://salarian22.netlify.app/", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop", description: "Media streaming" },
    { title: "Project 23", link: "https://salarian23.netlify.app/", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop", description: "Cloud storage" },
    { title: "Project 24", link: "https://salarian24.netlify.app/", image: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=800&auto=format&fit=crop", description: "Security system" },
    { title: "Project 25", link: "https://salarian25.netlify.app/", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&auto=format&fit=crop", description: "Monitoring tool" },
    { title: "Project 26", link: "https://salarian26.netlify.app/", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop", description: "Admin dashboard" },
    { title: "Project 27", link: "https://salarian27.netlify.app/", image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=800&auto=format&fit=crop", description: "Reporting system" },
    { title: "Project 28", link: "https://salarian28.netlify.app/", image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop", description: "Workflow engine" },
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
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-purple">All Projects</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-secondary mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore my complete portfolio of web applications and digital solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/80 rounded-full hover:bg-primary transition-colors inline-flex"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
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

export default AllProjects;
