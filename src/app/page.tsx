// import { Header } from "@/components/layout/Header";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Services } from "@/features/services/Services";
import { Portfolio } from "@/features/portfolio/Portfolio";
import { Testimonials } from "@/features/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* <Header /> */}
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
    </main>
  );
}
