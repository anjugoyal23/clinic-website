import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OnlineConsultationContent from "./OnlineConsultationContent";

export const metadata: Metadata = {
  title:
    "Online Homeopathy Consultation for International Patients — US, UK, Australia | Dr. Anju",
  description:
    "Book an online homeopathy consultation with Dr. Anju from anywhere in the world — USA, UK, Australia, Canada, UAE & beyond. 23+ years experience. Secure video consultations with medicines shipped globally.",
  keywords: [
    "online homeopathy consultation",
    "homeopathy doctor online",
    "homeopathy consultation USA",
    "homeopathy consultation UK",
    "homeopathy consultation Australia",
    "online homeopathic treatment",
    "international homeopathy doctor",
    "video call homeopathy",
    "homeopathy New York",
    "homeopathy London",
    "homeopathy Melbourne",
    "homeopathy Canada",
    "homeopathy UAE Dubai",
    "best homeopathy doctor India online",
    "chronic disease homeopathy online",
  ],
  openGraph: {
    title:
      "Online Homeopathy Consultation — Worldwide | Dr. Anju's Homeo Clinic",
    description:
      "Consult India's experienced homeopathic physician from the comfort of your home. Serving patients in the US, UK, Australia, Canada & UAE via secure video call.",
    type: "website",
    locale: "en_US",
    siteName: "Dr. Anju's Homeo Clinic",
  },
};

export default function OnlineConsultationPage() {
  return (
    <>
      <Navbar />
      <OnlineConsultationContent />
      <Footer />
    </>
  );
}
