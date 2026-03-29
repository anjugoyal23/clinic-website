import Image from "next/image";

const benefits = [
  {
    title: "Treats the Root Cause",
    description:
      "Unlike conventional medicine that masks symptoms, homeopathy identifies and addresses the underlying cause of your condition for true healing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a5d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "No Harmful Side Effects",
    description:
      "Homeopathic remedies are derived from natural substances and are safe for all ages — including children, pregnant women, and the elderly.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a5d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Safe for Long-Term Use",
    description:
      "No dependency, no withdrawal effects. Homeopathy strengthens your body's natural healing ability for lasting health improvements.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a5d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function WhyHomeopathy() {
  return (
    <section id="why-homeopathy" className="bg-[#faf9f6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Image */}
        <div className="flex-1 w-full max-w-xl">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/why-homeopathy.png"
              alt="Natural homeopathic remedies with herbs and mortar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 max-w-xl">
          <p className="text-xs tracking-[0.2em] uppercase text-[#7a7a6d] font-medium mb-4">
            Education = Trust
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#2b2b2b] leading-[1.15] mb-6 font-[family-name:var(--font-playfair)]">
            Why Choose Homeopathy?
          </h2>

          <p className="text-lg text-[#6b6b6b] leading-relaxed mb-10">
            A 200+ year old science backed by millions of success stories
            worldwide. Here&apos;s why patients trust homeopathy for chronic
            conditions.
          </p>

          {/* Benefits List */}
          <div className="flex flex-col gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#f5f4ee] rounded-2xl px-6 py-5 flex gap-5 items-start cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2b2b2b] mb-1.5 font-[family-name:var(--font-playfair)]">
                    {benefit.title}
                  </h3>
                  <p className="text-[14px] text-[#6b6b6b] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
