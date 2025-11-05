import { Github, Linkedin, Send, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-primary/20 bg-card/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Made Mehdi Salarian
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-all duration-300 hover:box-glow-cyan"
            >
              <Send size={20} className="text-primary" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-all duration-300 hover:box-glow-cyan"
            >
              <Github size={20} className="text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-all duration-300 hover:box-glow-cyan"
            >
              <Linkedin size={20} className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
