import { Header } from "@/components/layout/Header";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Services } from "@/features/services/Services";
import { SkillsMarquee } from "@/features/home/SkillsMarquee";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Hero />
      <SkillsMarquee />
      <About />
      <Services />
    </main>
  );
}
