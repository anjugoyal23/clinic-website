"use client";

import { useBooking } from "@/components/BookingModal";
import { useRegion } from "@/components/RegionContext";

const plans = [
  {
    name: "First Consultation",
    priceUSD: 39,
    originalPriceUSD: 60,
    subtitle: "Consultation + medicines included",
    features: [
      "45–60 minute detailed discussion",
      "Deep case analysis",
      "Personalised treatment plan",
      "Medicines delivered to your doorstep",
      "Online or in-clinic",
    ],
    highlighted: true,
    cta: "Book Consultation",
  },
  {
    name: "Follow-Up Visit",
    priceUSD: 29,
    originalPriceUSD: 40,
    subtitle: "Per session",
    features: [
      "Progress review",
      "Medicine adjustment",
      "Diet & lifestyle guidance",
      "Medicines delivered to your doorstep",
      "Online or in-clinic",
    ],
    highlighted: false,
    cta: "Book Appointment",
  },
];

export default function Pricing() {
  const { open: openBooking } = useBooking();
  const { formatPrice } = useRegion();

  return (
    <section id="pricing" className="bg-[#faf9f6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
            Simple Pricing
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-5 font-[family-name:var(--font-playfair)]">
            Transparent & Affordable
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            No hidden charges. Your first consultation is on us — because we
            believe everyone deserves a chance to heal naturally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border px-8 py-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.highlighted
                  ? "border-[#4a5d3a] shadow-lg bg-white relative"
                  : "border-gray-200 shadow-sm bg-white"
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
  );
}
