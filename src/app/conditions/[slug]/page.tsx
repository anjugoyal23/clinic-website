import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allConditions, getConditionBySlug } from "../data";
import ConditionContent from "./ConditionContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allConditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return {};

  return {
    title: condition.metaTitle,
    description: condition.metaDescription,
    keywords: condition.keywords,
    openGraph: {
      title: condition.metaTitle,
      description: condition.metaDescription,
      type: "website",
      siteName: "Dr. Anju's Homeo Clinic",
    },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) notFound();

  return (
    <>
      <Navbar />
      <ConditionContent condition={condition} />
      <Footer />
    </>
  );
}
