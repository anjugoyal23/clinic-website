const steps = [
  {
    number: "01",
    title: "Online Consultation",
    description:
      "Book a convenient time slot for your video consultation from anywhere in the world.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a5d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Deep Case Analysis",
    description:
      "We understand your complete medical history, lifestyle, and root cause of your condition.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a5d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Personalized Medicine",
    description:
      "Receive customized homeopathic remedies delivered to your doorstep — globally.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a5d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Continuous Follow-up",
    description:
      "Regular check-ins to track your progress and adjust treatment for optimal results.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a5d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#faf9f6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
            Simple Process
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-5 font-[family-name:var(--font-playfair)]">
            How It Works
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            Your healing journey is just four simple steps away. We make it easy
            for patients worldwide.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl px-7 py-8 flex flex-col gap-5 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group"
            >
              {/* Large faded step number */}
              <span className="absolute top-4 right-5 text-6xl font-bold text-[#e8e6e1]/60 select-none leading-none font-[family-name:var(--font-playfair)]">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#f0efe9] flex items-center justify-center relative z-10 transition-all duration-300 group-hover:bg-[#4a5d3a] group-hover:text-white group-hover:[&_svg]:stroke-white">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#2b2b2b] font-[family-name:var(--font-playfair)] relative z-10">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-[#6b6b6b] leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
