import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const CallMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const phoneNumber = "09140710299";

  return (
    <section ref={ref} className="py-16 px-4 bg-background/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/20 border-2 border-primary/40">
            <Phone className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-purple">Call Me</h2>
          <p className="text-muted-foreground mb-8">
            Have a project in mind? Let's discuss how I can help you achieve your goals
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${phoneNumber}`}>
              <Button className="glow-button px-8 py-6 text-lg w-full sm:w-auto">
                <Phone className="mr-2" />
                Call Now
              </Button>
            </a>
            
            <div className="px-6 py-3 bg-card/50 backdrop-blur border-2 border-primary/30 rounded-lg">
              <p className="text-lg font-mono tracking-wider text-foreground">
                {phoneNumber}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallMeSection;
