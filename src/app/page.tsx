import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import ProjectsSection from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="absolute top-[700px] right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
      </div>

    </main>
  );
}