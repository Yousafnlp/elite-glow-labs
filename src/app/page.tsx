import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Statement from "@/components/Statement";
import CaseStudy from "@/components/CaseStudy";
import InstagramWallLazy from "@/components/InstagramWallLazy";
import ClinicOS from "@/components/ClinicOS";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Statement />
        <CaseStudy />
        <InstagramWallLazy />
        <ClinicOS />
        <Process />
        <Packages />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
