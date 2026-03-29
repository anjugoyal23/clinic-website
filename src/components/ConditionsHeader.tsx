const conditions = [
  {
    title: "Stop Hair Fall Naturally",
    description:
      "Regrow hair with safe, natural treatments that address internal causes.",
    iconBg: "bg-[#fff3e0]",
    iconColor: "#e65100",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10" />
        <path d="M12 2c3 3.5 4 8 2 14" />
      </svg>
    ),
  },
  {
    title: "Clear Skin Without Steroids",
    description:
      "Treat eczema, psoriasis, and acne from within — no harsh chemicals.",
    iconBg: "bg-[#e0f2f1]",
    iconColor: "#00897b",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
        <circle cx="9" cy="14.5" r="1" fill="currentColor" />
      </svg>
    ),
    highlighted: true,
  },
  {
    title: "Manage Anxiety & Stress",
    description:
      "Find calm naturally with holistic treatment for anxiety and mental wellness.",
    iconBg: "bg-[#f3e5f5]",
    iconColor: "#7b1fa2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Allergies & Asthma Relief",
    description:
      "Long-term relief from seasonal allergies, sinusitis, and asthma triggers.",
    iconBg: "bg-[#e3f2fd]",
    iconColor: "#1565c0",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
    ),
  },
  {
    title: "Hormonal Balance",
    description:
      "PCOS, thyroid, menstrual issues — restore balance naturally.",
    iconBg: "bg-[#fce4ec]",
    iconColor: "#c62828",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4M12 20v-4" />
        <circle cx="12" cy="12" r="4" />
        <path d="M16 12h4M4 12h4" />
      </svg>
    ),
  },
  {
    title: "Migraine & Headaches",
    description:
      "Reduce frequency and intensity of chronic migraines without painkillers.",
    iconBg: "bg-[#fff8e1]",
    iconColor: "#bf360c",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Arthritis & Joint Pain",
    description:
      "Improve mobility and reduce inflammation with gentle, lasting treatment.",
    iconBg: "bg-[#e0f7fa]",
    iconColor: "#00838f",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2" />
        <path d="M13 8V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v4" />
        <path d="M8 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-1" />
        <path d="M18 8a2 2 0 1 1 4 0v5a8 8 0 0 1-8 8h-2" />
      </svg>
    ),
  },
  {
    title: "Diabetes Management",
    description:
      "Support blood sugar control alongside your existing treatment plan.",
    iconBg: "bg-[#e8f5e9]",
    iconColor: "#2e7d32",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c0 6-6 6-6 12a6 6 0 0 0 12 0c0-6-6-6-6-12z" />
      </svg>
    ),
  },
  {
    title: "Digestive Issues",
    description:
      "IBS, acidity, bloating — heal your gut permanently.",
    iconBg: "bg-[#f1f8e9]",
    iconColor: "#558b2f",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a4 4 0 0 0-8 0 4 4 0 0 0-8 0c0 4.5 4 8 8 12z" />
        <path d="M12 10v5M10 13h4" />
      </svg>
    ),
  },
  {
    title: "General Wellness",
    description:
      "Boost immunity, energy levels, and overall health with preventive care.",
    iconBg: "bg-[#e0f7fa]",
    iconColor: "#00838f",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function ConditionsSection() {
  return (
    <section id="conditions" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
            Expert Care
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-5 font-[family-name:var(--font-playfair)]">
            Conditions We Help With
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            Focused on outcomes, not just symptoms. We treat the root cause for
            lasting recovery.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition) => (
            <div
              key={condition.title}
              className={`rounded-2xl border px-8 py-8 flex flex-col gap-5 cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#4a5d3a] ${
                condition.highlighted
                  ? "border-[#4a5d3a] shadow-md"
                  : "border-transparent shadow-sm"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${condition.iconBg} flex items-center justify-center`}
                style={{ color: condition.iconColor }}
              >
                {condition.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2b2b2b] font-[family-name:var(--font-playfair)]">
                {condition.title}
              </h3>
              <p className="text-[15px] text-[#6b6b6b] leading-relaxed">
                {condition.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
