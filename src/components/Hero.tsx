"use client";

import Image from "next/image";
import { useBooking } from "@/components/BookingModal";

export default function Hero() {
  const { open: openBooking } = useBooking();

  return (
    <section className="bg-[#faf9f6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <p className="text-xs tracking-[0.2em] uppercase text-[#7a7a6d] font-medium mb-6">
            Natural Healing · For Modern Life
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 font-[family-name:var(--font-playfair)]">
            <span className="text-[#2b2b2b]">Heal Naturally.</span>
            <br />
            <span className="text-[#4a5d3a]">Treat the Root Cause.</span>
          </h1>

          <p className="text-lg text-[#6b6b6b] leading-relaxed mb-10 max-w-lg">
            23+ Years of Experience in Helping Patients Recover from Chronic
            Conditions — Safely and Naturally. No side effects. Long-term
            results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4a5d3a] text-white text-base font-medium hover:bg-[#3d4e30] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Book Online Consultation
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#c5c4be] text-[#4a4a4a] text-base font-medium hover:border-[#4a5d3a] hover:text-[#4a5d3a] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-transparent"
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

        {/* Right Image */}
        <div className="flex-1 relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-[340px] h-[420px] sm:w-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/hero-page.png"
                alt="Natural healing herbs"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* 23+ Years Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-start hover:shadow-xl transition-all duration-300 cursor-default animate-float">
              <span className="text-3xl font-bold text-[#2b2b2b]">
                23<sup className="text-lg font-semibold">+</sup>
              </span>
              <span className="text-sm text-[#6b6b6b] font-medium">
                Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
