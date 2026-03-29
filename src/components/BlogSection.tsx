import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="bg-[#f0efe9] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
            Health Insights
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-5 font-[family-name:var(--font-playfair)]">
            Learn &amp; Heal
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            Expert insights on natural healing, chronic conditions, and the
            science behind homeopathy.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col group"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-7 py-6 flex flex-col flex-1 gap-4">
                {/* Category + Read Time */}
                <div className="flex items-center gap-4 text-sm">
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
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#2b2b2b] leading-snug font-[family-name:var(--font-playfair)]">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[14px] text-[#6b6b6b] leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2b2b2b] group-hover:text-[#4a5d3a] transition-colors mt-2">
                  Read more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
