"use client";

import { useBooking } from "@/components/BookingModal";

export default function CTASection() {
  const { open: openBooking } = useBooking();

  return (
    <section className="bg-[#4a5d3a] py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle decorative shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/20 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/15 translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-6 font-[family-name:var(--font-playfair)]">
          Start Your Healing Journey Today
        </h2>

        <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
          Don&apos;t let chronic conditions hold you back. Take the first step
          towards natural, lasting healing with a personalised consultation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openBooking}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#4a5d3a] text-base font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Book Consultation
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a
            href="https://wa.me/919914099036"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white text-base font-semibold hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
