import { Header } from "@/components/layout/Header";
import { Hero } from "@/features/hero/Hero";
import { SkillsMarquee } from "@/features/home/SkillsMarquee";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Hero />
      <SkillsMarquee />
    </main>
  );
}
