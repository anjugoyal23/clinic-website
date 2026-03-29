import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Anju's Homeo Clinic — Healing & Root Cause Treatment",
  description:
    "23+ Years of Experience in Helping Patients Recover from Chronic Conditions — Safely and Naturally. Book your consultation today.",
  openGraph: {
    title: "Dr. Anju's Homeo Clinic — Healing & Root Cause Treatment",
    description:
      "23+ Years of Experience in Helping Patients Recover from Chronic Conditions — Safely and Naturally. Book your consultation today.",
    type: "website",
    locale: "en_US",
    siteName: "Dr. Anju's Homeo Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Anju's Homeo Clinic — Healing & Root Cause Treatment",
    description:
      "23+ Years of Experience in Helping Patients Recover from Chronic Conditions — Safely and Naturally.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
