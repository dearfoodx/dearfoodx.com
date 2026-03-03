import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnerScroll from "@/components/PartnerScroll";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import BusinessSection from "@/components/BusinessSection";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PartnerScroll />
        <FeaturesSection />
        <AboutSection />
        <BusinessSection />
        <ServicesSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
