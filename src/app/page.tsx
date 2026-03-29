import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ConditionsSection from "@/components/ConditionsHeader";
import HowItWorks from "@/components/HowItWorks";
import WhyHomeopathy from "@/components/WhyHomeopathy";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <ConditionsSection />
      <HowItWorks />
      <WhyHomeopathy />
      <AboutDoctor />
      <Testimonials />
      <BlogSection />
      <Pricing />
      <CTASection />
      <FAQSection />
      <Footer />
    </>
  );
}
