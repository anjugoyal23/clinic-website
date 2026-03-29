import Image from "next/image";

const highlights = [
  "23+ years of clinical experience in homeopathy",
  "Specialist in chronic and complex conditions",
  "Personalised treatment plans for every patient",
  "Patients from 8+ countries worldwide",
  "Deep case analysis approach for root cause identification",
  "Continuous follow-up and care coordination",
];

export default function AboutDoctor() {
  return (
    <section id="about" className="bg-[#faf9f6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 max-w-xl order-2 lg:order-1">
          <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
            Meet Your Doctor
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#2b2b2b] mb-6 font-[family-name:var(--font-playfair)]">
            Dr. Anju
          </h2>

          <p className="text-[16px] text-[#6b6b6b] leading-relaxed mb-8">
            With over 23 years of dedicated practice, Dr. Anju has helped
            thousands of patients heal from chronic conditions that conventional
            medicine couldn&apos;t resolve. Her approach combines deep medical
            knowledge with compassionate, personalised care.
          </p>

          {/* Highlights List */}
          <ul className="flex flex-col gap-3">
            {highlights.map((item) => (
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
                <span className="text-[15px] text-[#5a5a5a]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image + Quote */}
        <div className="flex-1 w-full max-w-xl order-1 lg:order-2 relative">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/doctor.jpg"
              alt="Dr. Anju's clinic"
              fill
              className="object-cover"
            />
          </div>
          {/* Quote Badge */}
          <div className="absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-sm bg-white rounded-2xl shadow-xl px-6 py-5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-default">
            <p className="text-[15px] text-[#2b2b2b] italic leading-relaxed font-[family-name:var(--font-playfair)]">
              &ldquo;I believe in treating the person, not just the disease.
              Every patient deserves to heal naturally.&rdquo;
            </p>
            <p className="text-sm text-[#4a5d3a] font-semibold mt-2">
              — Dr. Anju
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
