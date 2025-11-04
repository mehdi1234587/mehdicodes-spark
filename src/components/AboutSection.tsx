import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Bot, Brain, Server, Smartphone, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "Telegram Bots", level: 95, icon: Bot, color: "primary" },
    { name: "React & Next.js", level: 90, icon: Code2, color: "secondary" },
    { name: "AI Integration", level: 88, icon: Brain, color: "accent" },
    { name: "Node.js", level: 85, icon: Server, color: "primary" },
    { name: "TypeScript", level: 92, icon: Code2, color: "secondary" },
    { name: "API Development", level: 87, icon: Zap, color: "accent" },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate developer specializing in creating cutting-edge Telegram bots,
              modern web applications, and AI-powered solutions. With years of experience in
              automation and full-stack development, I transform ideas into reality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise lies in building scalable, efficient, and user-friendly applications
              that leverage the latest technologies. Whether it's a custom Telegram bot, a
              responsive website, or AI integration, I deliver solutions that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <skill.icon className={`text-${skill.color}`} size={20} />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${
                      skill.color === "primary"
                        ? "from-primary to-primary/70"
                        : skill.color === "secondary"
                        ? "from-secondary to-secondary/70"
                        : "from-accent to-accent/70"
                    } rounded-full box-glow-${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
