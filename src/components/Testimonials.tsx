"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "After trying countless treatments for my hair loss, I was losing hope. Dr. Anju's approach was completely different — she understood the root cause and within 6 weeks, my hair fall reduced by 80%. I'm so grateful!",
    name: "Harleen Kaur Brar",
    location: "Chandigarh, India · Hair Loss",
  },
  {
    quote:
      "I suffered from severe allergies for 10 years. Antihistamines were my daily companion. Dr. Anju's homeopathic treatment changed everything. After just 2 months, I barely need any medication. True healing!",
    name: "Navtej Singh Dhillon",
    location: "London, UK · Chronic Allergies",
  },
  {
    quote:
      "The anxiety was ruining my life and relationships. Dr. Anju's calm, thorough approach to understanding my mental and physical health was remarkable. Today, I feel like a completely different person — at peace.",
    name: "Rituparna Sengupta",
    location: "Kolkata, India · Anxiety & Stress",
  },
  {
    quote:
      "Years of PCOS and irregular periods — every doctor just gave me hormonal pills. Dr. Anju prescribed non-hormonal homeopathic medicines that treated the root cause. Within 2 months, my cycles were regular again. Proper medicines, zero synthetic hormones.",
    name: "Tanvi Kulkarni",
    location: "Pune, India · Hormonal Imbalance",
  },
  {
    quote:
      "My son's eczema was getting worse with every steroid cream. Dr. Anju treated him with gentle remedies and within a month, his skin cleared up beautifully. No side effects at all!",
    name: "Gurpreet Kaur Sandhu",
    location: "Amritsar, India · Eczema",
  },
  {
    quote:
      "Chronic migraines made it impossible to work. Dr. Anju's deep case analysis found the trigger and her treatment reduced my episodes from weekly to almost none in just 3 weeks. Life-changing!",
    name: "Devika Nambiar",
    location: "Kochi, India · Migraines",
  },
  {
    quote:
      "I was skeptical about homeopathy, honestly. But after a friend's recommendation, I tried Dr. Anju's online consultation for my chronic sinusitis. Within a month, the congestion started clearing. Two months in, I'm breathing freely for the first time in years.",
    name: "Rachel Simmons",
    location: "Austin, TX · Chronic Sinusitis",
  },
];

const VISIBLE = 3;

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#c9a84c" stroke="#c9a84c" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / VISIBLE);

  const currentTestimonials = testimonials.slice(
    page * VISIBLE,
    page * VISIBLE + VISIBLE
  );

  const prev = () => setPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  const next = () => setPage((p) => (p < totalPages - 1 ? p + 1 : 0));

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
              Patient Stories
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2b2b2b] font-[family-name:var(--font-playfair)]">
              Real Transformations
            </h2>
          </div>
          {/* Nav Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="w-11 h-11 rounded-full border border-[#d5d4cf] flex items-center justify-center text-[#4a4a4a] hover:border-[#4a5d3a] hover:text-[#4a5d3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="w-11 h-11 rounded-full border border-[#d5d4cf] flex items-center justify-center text-[#4a4a4a] hover:border-[#4a5d3a] hover:text-[#4a5d3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTestimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#faf9f6] rounded-2xl px-7 py-8 flex flex-col justify-between gap-6 cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative"
            >
              {/* Stars + Quote icon */}
              <div className="flex items-start justify-between">
                <StarRating />
                <span className="text-5xl leading-none text-[#e0dfda] font-serif select-none">
                  &ldquo;
                </span>
              </div>

              {/* Quote */}
              <p className="text-[15px] text-[#5a5a5a] leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Divider + Author */}
              <div className="border-t border-[#e8e6e1] pt-4">
                <p className="text-sm font-bold text-[#2b2b2b]">{t.name}</p>
                <p className="text-xs text-[#8a8a8a] mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === page
                  ? "w-7 bg-[#4a5d3a]"
                  : "w-2.5 bg-[#d5d4cf] hover:bg-[#4a5d3a]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
