"use client";

import { useBooking } from "@/components/BookingModal";
import { ConditionPage } from "@/lib/conditions";

export default function ConditionContent({
  condition,
}: {
  condition: ConditionPage;
}) {
  const { open: openBooking } = useBooking();

  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="bg-[#faf9f6] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
            Condition We Treat
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 font-[family-name:var(--font-playfair)] text-[#2b2b2b]">
            {condition.title}
          </h1>
          <p className="text-lg text-[#6b6b6b] leading-relaxed mb-4 max-w-2xl mx-auto">
            {condition.subtitle}
          </p>
          <p className="text-[15px] text-[#4a5d3a] font-medium mb-10">
            {condition.heroTagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4a5d3a] text-white text-base font-medium hover:bg-[#3d4e30] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
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
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ─── Symptoms ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] text-center mb-4 font-[family-name:var(--font-playfair)]">
            Recognise the Symptoms
          </h2>
          <p className="text-[15px] text-[#6b6b6b] text-center mb-14 max-w-xl mx-auto">
            These are the most common signs patients describe. If any of these
            sound familiar, you may benefit from a detailed consultation.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {condition.symptoms.map((s) => (
              <div
                key={s.title}
                className="bg-[#faf9f6] rounded-2xl px-6 py-6 border border-[#e8e6e1] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-[16px] font-semibold text-[#2b2b2b] mb-2">
                  {s.title}
                </h3>
                <p className="text-[14px] text-[#6b6b6b] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── When to Consult ─── */}
      <section className="bg-[#faf9f6] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] text-center mb-4 font-[family-name:var(--font-playfair)]">
            When Should You Consult?
          </h2>
          <p className="text-[15px] text-[#6b6b6b] text-center mb-12 max-w-xl mx-auto">
            If any of the following apply to you, it&apos;s worth exploring
            homeopathic treatment.
          </p>

          <ul className="flex flex-col gap-4">
            {condition.whenToConsult.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a5d3a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span className="text-[15px] text-[#5a5a5a] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Our Approach ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] text-center mb-4 font-[family-name:var(--font-playfair)]">
            How Dr. Anju Treats This
          </h2>
          <p className="text-[15px] text-[#6b6b6b] text-center mb-14 max-w-xl mx-auto">
            A structured, evidence-tracked approach personalised to your case.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {condition.approach.map((step, i) => (
              <div
                key={step.title}
                className="bg-[#faf9f6] rounded-2xl px-6 py-6 border border-[#e8e6e1] hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#4a5d3a] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-[16px] font-semibold text-[#2b2b2b]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[14px] text-[#6b6b6b] leading-relaxed pl-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Case Example ─── */}
      <section className="bg-[#faf9f6] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] text-center mb-14 font-[family-name:var(--font-playfair)]">
            A Real Case Study
          </h2>

          <div className="bg-white rounded-3xl px-8 py-10 shadow-sm border border-[#e8e6e1]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#4a5d3a]/10 flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a5d3a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#2b2b2b]">
                  {condition.caseExample.patient}
                </p>
                <p className="text-[13px] text-[#7a7a6d]">
                  {condition.caseExample.condition}
                </p>
              </div>
            </div>

            <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-6">
              {condition.caseExample.story}
            </p>

            <div className="bg-[#4a5d3a]/5 rounded-xl px-6 py-4 border-l-4 border-[#4a5d3a]">
              <p className="text-[13px] text-[#4a5d3a] font-semibold uppercase tracking-wider mb-1">
                Outcome
              </p>
              <p className="text-[15px] text-[#2b2b2b] leading-relaxed font-medium">
                {condition.caseExample.outcome}
              </p>
            </div>
          </div>

          <p className="text-[13px] text-[#7a7a6d] text-center mt-6 italic">
            * Patient details anonymised. Results vary by individual case.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] text-center mb-14 font-[family-name:var(--font-playfair)]">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-5">
            {condition.faq.map((faq) => (
              <div
                key={faq.q}
                className="bg-[#faf9f6] rounded-2xl px-6 py-6 border border-[#e8e6e1]"
              >
                <h3 className="text-[16px] font-semibold text-[#2b2b2b] mb-2">
                  {faq.q}
                </h3>
                <p className="text-[14px] text-[#6b6b6b] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="bg-[#4a5d3a] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Ready to Start Healing?
          </h2>
          <p className="text-[15px] text-white/80 mb-8 max-w-lg mx-auto">
            Book a consultation with Dr. Anju. Every case is personally
            reviewed. Online and in-clinic appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#4a5d3a] text-base font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Book Consultation
            </button>
            <a
              href="https://wa.me/919914099036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white text-base font-medium hover:border-white hover:-translate-y-1 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
