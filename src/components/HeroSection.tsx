import { motion } from "framer-motion";
import { Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const socialLinks = [
    { icon: Send, href: "https://t.me/yourusername", label: "Telegram" },
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-cyan"
            animate={{
              textShadow: [
                "0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan))",
                "0 0 20px hsl(var(--neon-cyan)), 0 0 40px hsl(var(--neon-cyan))",
                "0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Mehdi Salarian
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
              <span className="text-primary">Telegram Bot</span> &{" "}
              <span className="text-secondary glow-magenta">AI Developer</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Building intelligent bots, stunning websites, and AI-powered solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-card border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground box-glow-cyan transition-all duration-300"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <link.icon size={20} />
                    {link.label}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
