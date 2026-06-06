import Image from "next/image";

const credentials = [
  { label: "Degree", value: "BHMS" },
  { label: "Experience", value: "23+ Years" },
  { label: "Patients Treated", value: "5,000+" },
  { label: "Countries Served", value: "8+" },
];

const complexCases = [
  "Treatment-resistant eczema & psoriasis",
  "Chronic autoimmune conditions",
  "Hormonal disorders (PCOS, thyroid, infertility)",
  "Severe recurring migraines & neuralgias",
  "Multi-drug-resistant allergies & asthma",
  "Long-standing anxiety & stress disorders",
  "Childhood chronic conditions & behavioural issues",
  "Post-surgical recovery & rehabilitation",
];

const approachSteps = [
  {
    title: "In-Depth Case Analysis",
    description:
      "Every consultation begins with a thorough 60–90 minute case study covering your complete medical history, lifestyle, emotional patterns, and family predispositions.",
  },
  {
    title: "Constitutional Prescribing",
    description:
      "Rather than matching remedies to symptoms, Dr. Anju prescribes based on your unique constitutional type — ensuring the medicine works at the deepest level.",
  },
  {
    title: "Root Cause Focus",
    description:
      "Treatments are designed to address the underlying imbalance, not suppress symptoms. This leads to long-lasting relief without dependency on medication.",
  },
  {
    title: "Structured Follow-Ups",
    description:
      "Regular follow-ups track your progress with measurable outcomes. Treatment plans are dynamically adjusted based on your response.",
  },
];

const affiliations = [
  "Registered practitioner — State Homeopathic Medical Board",
  "Member — Indian Institute of Homeopathic Physicians (IIHP)",
  "Life member — Liga Medicorum Homoeopathica Internationalis (LMHI)",
  "Regular speaker at national & international homeopathy conferences",
  "Published case studies in peer-reviewed homeopathic journals",
];

function CheckIcon() {
  return (
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
  );
}

export default function AboutDoctor() {
  return (
    <section id="about" className="bg-[#faf9f6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ─── Top: Intro + Photo ─── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-xl order-2 lg:order-1">
            <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-4">
              Meet Your Doctor
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold text-[#2b2b2b] mb-2 font-[family-name:var(--font-playfair)]">
              Dr. Anju
            </h2>
            <p className="text-[15px] text-[#4a5d3a] font-semibold mb-6">
              BHMS, MD (Homeopathy) · 23+ Years Clinical Practice
            </p>

            <p className="text-[16px] text-[#6b6b6b] leading-relaxed mb-4">
              With over two decades of dedicated clinical practice, Dr. Anju is
              one of the most experienced homeopathic physicians practising
              today. She has successfully treated over 5,000 patients across 8
              countries — many of whom had exhausted conventional treatment
              options before finding lasting relief through her care.
            </p>
            <p className="text-[16px] text-[#6b6b6b] leading-relaxed mb-8">
              Her expertise lies in complex, chronic, and so-called
              &ldquo;difficult&rdquo; cases — conditions that have persisted for
              years, cases involving multiple failed treatments, and patients who
              were told nothing more could be done. Dr. Anju&apos;s deep
              understanding of constitutional homeopathy, combined with a
              compassionate and methodical approach, has earned her the trust of
              families across generations.
            </p>

            {/* Credentials Row */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="bg-white rounded-xl px-5 py-4 shadow-sm border border-[#e8e6e1]"
                >
                  <p className="text-xs text-[#7a7a6d] uppercase tracking-wider mb-1">
                    {cred.label}
                  </p>
                  <p className="text-[15px] font-semibold text-[#2b2b2b]">
                    {cred.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Verified Credentials Strip */}
            <div className="mt-6 bg-[#f0efe9] rounded-2xl px-6 py-5 border border-[#e0dfda]">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a5d3a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <p className="text-[14px] font-semibold text-[#2b2b2b] uppercase tracking-wide">
                  Verified Credentials
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4a5d3a] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-[#7a7a6d]">
                      Registered under
                    </p>
                    <p className="text-[14px] font-medium text-[#2b2b2b]">
                      Central Council of Homoeopathy (CCH), Govt. of India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4a5d3a] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-[#7a7a6d]">
                      State Registration
                    </p>
                    <p className="text-[14px] font-medium text-[#2b2b2b]">
                      Council of Homeopathic System of Medicine, Chandigarh
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4a5d3a] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-[#7a7a6d]">Qualification</p>
                    <p className="text-[14px] font-medium text-[#2b2b2b]">
                      BHMS — recognised by National Commission for Indian System
                      of Medicine (NCISM)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4a5d3a] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-[#7a7a6d]">
                      Licence Status
                    </p>
                    <p className="text-[14px] font-medium text-[#4a5d3a] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-600 inline-block" />
                      Active &amp; In Good Standing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image + Quote */}
          <div className="flex-1 w-full max-w-xl order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/doctor.jpg"
                alt="Dr. Anju — Homeopathic Physician"
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

        {/* ─── Complex Cases & Specialisations ─── */}
        <div className="mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] mb-3 font-[family-name:var(--font-playfair)]">
              Complex Cases &amp; Specialisations
            </h3>
            <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-8">
              Dr. Anju has built a reputation for taking on cases that other
              practitioners consider untreatable. Her clinic regularly receives
              referrals for patients with multi-year, multi-treatment-failure
              histories.
            </p>

            <ul className="flex flex-col gap-3">
              {complexCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[15px] text-[#5a5a5a]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Approach */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] mb-3 font-[family-name:var(--font-playfair)]">
              Treatment Approach
            </h3>
            <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-8">
              What sets Dr. Anju apart is not just what she treats, but how she
              treats. Her methodology is rigorous, evidence-tracked, and deeply
              personalised.
            </p>

            <div className="flex flex-col gap-5">
              {approachSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-[#e8e6e1] hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#4a5d3a] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <h4 className="text-[16px] font-semibold text-[#2b2b2b]">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-[14px] text-[#6b6b6b] leading-relaxed pl-10">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Professional Affiliations & Recognition ─── */}
        {/* 
        <div className="mt-20 bg-white rounded-3xl px-8 py-10 lg:px-12 lg:py-12 shadow-sm border border-[#e8e6e1]">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2b2b2b] mb-3 font-[family-name:var(--font-playfair)]">
            Professional Affiliations &amp; Recognition
          </h3>
          <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-8 max-w-2xl">
            Dr. Anju&apos;s work is recognised by leading homeopathic bodies
            nationally and internationally, and she continues to contribute to
            the advancement of the field.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {affiliations.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[15px] text-[#5a5a5a]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        */}

        {/* ─── International Practice Note ─── */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-[#f0efe9] rounded-2xl px-8 py-7">
          <div className="w-12 h-12 rounded-full bg-[#4a5d3a]/10 flex items-center justify-center flex-shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4a5d3a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div>
            <p className="text-[16px] font-semibold text-[#2b2b2b] mb-1">
              Serving Patients Worldwide
            </p>
            <p className="text-[14px] text-[#6b6b6b] leading-relaxed">
              Dr. Anju offers secure online consultations for international
              patients across all time zones. With patients in the USA, UK, UAE,
              Canada, Australia, and beyond, she has extensive experience
              managing cases remotely with the same thoroughness as in-clinic
              visits. Medicines are shipped internationally with full tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
