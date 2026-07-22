import About from "@/components/About";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileActions from "@/components/MobileActions";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import ProjectTypes from "@/components/ProjectTypes";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Process />
        <ProjectTypes />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <MobileActions />
    </>
  );
}
