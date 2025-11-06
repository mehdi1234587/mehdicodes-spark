import ParticlesBackground from "@/components/ParticlesBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MyProjectsSection from "@/components/MyProjectsSection";
import BestProjectsSection from "@/components/BestProjectsSection";
import ContactSection from "@/components/ContactSection";
import CallMeSection from "@/components/CallMeSection";
import AIChatWidget from "@/components/AIChatWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MyProjectsSection />
        <BestProjectsSection />
        <ContactSection />
        <CallMeSection />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Index;
