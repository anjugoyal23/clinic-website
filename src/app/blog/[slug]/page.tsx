import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — Dr. Anju's Homeo Clinic`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <article className="bg-white">
        {/* Hero Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-white rounded-3xl shadow-lg px-8 sm:px-12 py-10 sm:py-14">
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm mb-6">
              <span className="text-[#4a5d3a] font-semibold">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-[#8a8a8a]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {post.readTime}
              </span>
              <span className="text-[#8a8a8a]">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2b2b2b] leading-tight mb-8 font-[family-name:var(--font-playfair)]">
              {post.title}
            </h1>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-[family-name:var(--font-playfair)] prose-headings:text-[#2b2b2b]
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-[#4a4a4a] prose-p:leading-relaxed prose-p:text-base
                prose-li:text-[#4a4a4a] prose-li:text-base
                prose-strong:text-[#2b2b2b]
                prose-a:text-[#4a5d3a] prose-a:no-underline hover:prose-a:underline
                prose-table:text-sm
                prose-th:bg-[#f5f4ee] prose-th:px-4 prose-th:py-2
                prose-td:px-4 prose-td:py-2 prose-td:border-b prose-td:border-[#e8e6e1]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Back Link */}
            <div className="mt-14 pt-8 border-t border-[#e8e6e1]">
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a5d3a] hover:-translate-x-1 transition-transform"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-20" />
      </article>
      <Footer />
    </>
  );
}
