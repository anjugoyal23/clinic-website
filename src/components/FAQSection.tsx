"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does homeopathy really work?",
    answer:
      "Yes. Homeopathy is a 200+ year old system of medicine used by millions worldwide. It works by stimulating the body's own healing mechanisms. Dr. Anju has successfully treated thousands of patients with chronic conditions using homeopathy.",
  },
  {
    question: "How long does homeopathic treatment take?",
    answer:
      "The duration depends on the condition, its severity, and how long you've had it. Acute conditions may improve within days, while chronic conditions typically show significant improvement within 3-6 months of consistent treatment.",
  },
  {
    question: "Can I consult online from outside India?",
    answer:
      "Absolutely! Dr. Anju treats patients from 8+ countries worldwide through video consultations. Medicines can be shipped to your doorstep globally.",
  },
  {
    question: "Is homeopathy safe for children and pregnant women?",
    answer:
      "Yes. Homeopathic remedies are derived from natural substances and are extremely safe. They have no harmful side effects, making them suitable for children, pregnant women, and the elderly.",
  },
  {
    question: "Can I take homeopathy alongside allopathic medicine?",
    answer:
      "Yes, homeopathic medicines can be safely taken alongside allopathic treatments. Dr. Anju will guide you on how to integrate both approaches for the best outcomes.",
  },
  {
    question: "What conditions does Dr. Anju specialize in?",
    answer:
      "Dr. Anju specializes in chronic and complex conditions including hair loss, skin disorders, anxiety & stress, allergies, hormonal imbalances, migraines, arthritis, diabetes management, digestive issues, and general wellness.",
  },
  {
    question: "How do online consultations work?",
    answer:
      "Book a time slot through our website or WhatsApp. You'll receive a video call link. During the 30-45 minute consultation, Dr. Anju will understand your complete medical history, lifestyle, and symptoms. After analysis, personalised medicines will be shipped to your address.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#faf9f6] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
            Common Questions
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2b2b2b] font-[family-name:var(--font-playfair)]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#e0dfda]">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
              >
                <span className="text-[16px] font-medium text-[#2b2b2b] group-hover:text-[#4a5d3a] transition-colors font-[family-name:var(--font-playfair)]">
                  {faq.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6b6b6b"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-[15px] text-[#6b6b6b] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
