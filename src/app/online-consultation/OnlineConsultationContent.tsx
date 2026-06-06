"use client";

import { useBooking } from "@/components/BookingModal";
import { useRegion } from "@/components/RegionContext";

const countries = [
  { name: "United States", cities: "New York, Los Angeles, Chicago, Houston" },
  { name: "United Kingdom", cities: "London, Manchester, Birmingham" },
  { name: "Australia", cities: "Melbourne, Sydney, Brisbane, Perth" },
  { name: "Canada", cities: "Toronto, Vancouver, Calgary" },
  { name: "UAE", cities: "Dubai, Abu Dhabi, Sharjah" },
  { name: "Singapore", cities: "All regions" },
];

const steps = [
  {
    num: "01",
    title: "Book Your Slot",
    desc: "Choose a time that works in your timezone. We offer flexible scheduling across all time zones including evenings & weekends.",
  },
  {
    num: "02",
    title: "Video Consultation",
    desc: "60–90 minute in-depth consultation via secure video call. Dr. Anju personally handles every international case.",
  },
  {
    num: "03",
    title: "Medicines Shipped to You",
    desc: "Homeopathic medicines are dispatched internationally with full tracking. Typically delivered within 7–14 business days.",
  },
  {
    num: "04",
    title: "Ongoing Follow-Ups",
    desc: "Regular video follow-ups to track progress. WhatsApp support between appointments for any concerns.",
  },
];

const plans = [
  {
    name: "First Online Consultation",
    priceUSD: 39,
    originalPriceUSD: 60,
    subtitle: "Consultation + medicines included",
    features: [
      "60–90 minute in-depth video consultation",
      "Complete case analysis by Dr. Anju",
      "Personalised treatment plan",
      "Medicines shipped to your door internationally",
      "WhatsApp support between appointments",
    ],
    highlighted: true,
    cta: "Book Consultation",
  },
  {
    name: "Follow-Up Consultation",
    priceUSD: 29,
    originalPriceUSD: 40,
    subtitle: "Per session",
    features: [
      "Progress review via video call",
      "Medicine adjustment as needed",
      "Diet & lifestyle guidance",
      "Medicines shipped internationally",
      "Flexible scheduling across time zones",
    ],
    highlighted: false,
    cta: "Book Follow-Up",
  },
];

const faqs = [
  {
    q: "Is online homeopathy consultation as effective as in-person?",
    a: "Absolutely. Homeopathy relies on detailed case history rather than physical examination. Dr. Anju has successfully treated thousands of international patients with outcomes identical to in-clinic visits.",
  },
  {
    q: "How do I receive the medicines?",
    a: "Medicines are shipped via international courier with full tracking. We ship to all major countries. Delivery typically takes 7–14 business days depending on your location.",
  },
  {
    q: "What timezone do you consult in?",
    a: "We schedule consultations to suit your local time — including early mornings, evenings, and weekends. Patients across the US, UK, Australia, and the Middle East regularly consult with us at convenient hours.",
  },
  {
    q: "What conditions can be treated online?",
    a: "All chronic conditions — skin disorders, hair loss, hormonal imbalances, anxiety, allergies, migraines, digestive issues, autoimmune conditions, and more. If you're unsure, reach out and we'll let you know.",
  },
];

export default function OnlineConsultationContent() {
  const { open: openBooking } = useBooking();
  const { formatPrice } = useRegion();

  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="bg-[#faf9f6] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4a5d3a]/10 rounded-full px-4 py-1.5 mb-6">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4a5d3a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="text-[13px] font-semibold text-[#4a5d3a]">
              Serving Patients in 8+ Countries
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 font-[family-name:var(--font-playfair)]">
            <span className="text-[#2b2b2b]">Online Homeopathy</span>
            <br />
            <span className="text-[#4a5d3a]">Consultation Worldwide</span>
          </h1>

          <p className="text-lg text-[#6b6b6b] leading-relaxed mb-4 max-w-2xl mx-auto">
            Consult Dr. Anju — one of India&apos;s most experienced
            homeopathic physicians — from the comfort of your home. Secure
            video consultations with personalised treatment plans and medicines
            shipped directly to your door.
          </p>
          <p className="text-[15px] text-[#7a7a6d] mb-10">
            Available for patients in the{" "}
            <strong className="text-[#2b2b2b]">US</strong>,{" "}
            <strong className="text-[#2b2b2b]">UK</strong>,{" "}
            <strong className="text-[#2b2b2b]">Australia</strong>,{" "}
            <strong className="text-[#2b2b2b]">Canada</strong>,{" "}
            <strong className="text-[#2b2b2b]">UAE</strong>,{" "}
            <strong className="text-[#2b2b2b]">Singapore</strong> &amp; more
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ─── Trust Strip ─── */}
      <section className="bg-[#f0efe9] py-6">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-x-10 gap-y-3 text-[14px] text-[#5a5a5a]">
          <span className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4a5d3a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            CCH Registered (Govt. of India)
          </span>
          <span className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4a5d3a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            23+ Years Experience
          </span>
          <span className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4a5d3a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            5,000+ Patients Worldwide
          </span>
          <span className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4a5d3a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            Secure Video Consultations
          </span>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="bg-[#faf9f6] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] text-center mb-4 font-[family-name:var(--font-playfair)]">
            How Online Consultation Works
          </h2>
          <p className="text-[15px] text-[#6b6b6b] text-center mb-14 max-w-xl mx-auto">
            A simple 4-step process — from booking to receiving your medicines
            at home, wherever you are in the world.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl px-6 py-7 shadow-sm border border-[#e8e6e1] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl font-bold text-[#4a5d3a]/20 font-[family-name:var(--font-playfair)]">
                  {step.num}
                </span>
                <h3 className="text-[16px] font-semibold text-[#2b2b2b] mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#6b6b6b] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Countries We Serve ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] text-center mb-4 font-[family-name:var(--font-playfair)]">
            Patients Across the Globe
          </h2>
          <p className="text-[15px] text-[#6b6b6b] text-center mb-14 max-w-xl mx-auto">
            We regularly consult with patients in these countries and cities.
            No matter where you are, quality homeopathic care is just a video
            call away.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map((c) => (
              <div
                key={c.name}
                className="bg-[#faf9f6] rounded-2xl px-6 py-5 border border-[#e8e6e1]"
              >
                <p className="text-[16px] font-semibold text-[#2b2b2b] mb-1">
                  {c.name}
                </p>
                <p className="text-[13px] text-[#7a7a6d]">{c.cities}</p>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-[#7a7a6d] text-center mt-8">
            Don&apos;t see your country? We serve patients globally — reach out
            to check availability in your region.
          </p>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="bg-[#f0efe9] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
              Simple Pricing
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] mb-4 font-[family-name:var(--font-playfair)]">
              Transparent &amp; Affordable
            </h2>
            <p className="text-[15px] text-[#6b6b6b] max-w-xl mx-auto leading-relaxed">
              Consultation fees include medicines and international shipping. No
              hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border px-8 py-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  plan.highlighted
                    ? "border-[#4a5d3a] shadow-lg bg-white relative"
                    : "border-[#e8e6e1] shadow-sm bg-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4a5d3a] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-bold text-[#2b2b2b] mb-1 font-[family-name:var(--font-playfair)]">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#8a8a8a] mb-6">{plan.subtitle}</p>

                <div className="mb-8 flex items-baseline gap-3">
                  {plan.originalPriceUSD && (
                    <span className="text-3xl font-bold text-[#c0392b] line-through">
                      {formatPrice(plan.originalPriceUSD)}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-[#2b2b2b]">
                    {formatPrice(plan.priceUSD)}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-[15px] text-[#6b6b6b]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0 text-[#4a5d3a]"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openBooking}
                  className={`w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    plan.highlighted
                      ? "bg-[#4a5d3a] text-white hover:bg-[#3d4e30]"
                      : "bg-[#f0ede8] text-[#2b2b2b] hover:bg-[#e5e1da]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#faf9f6] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] text-center mb-14 font-[family-name:var(--font-playfair)]">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl px-6 py-6 shadow-sm border border-[#e8e6e1]"
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
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-[15px] text-white/80 mb-8 max-w-lg mx-auto">
            Book your first online consultation today. Dr. Anju personally
            reviews every international case.
          </p>
          <button
            onClick={openBooking}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#4a5d3a] text-base font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
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
        </div>
      </section>
    </main>
  );
}
