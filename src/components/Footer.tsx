import Link from "next/link";

const quickLinks = [
  { label: "Conditions", href: "#conditions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Homeopathy", href: "#why-homeopathy" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2b2b2b] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#4a5d3a] flex items-center justify-center text-white font-semibold text-lg">
                A
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Dr. Anju&apos;s Homeo Clinic
              </span>
            </div>
            <p className="text-[15px] text-[#a0a0a0] leading-relaxed max-w-sm">
              Natural Healing. Root Cause Treatment. Long-Term Results. Helping
              patients worldwide heal chronic conditions for 23+
              years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-[#a0a0a0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a5d3a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-[15px] text-[#a0a0a0]">
                  +91 99140 99036
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a5d3a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
                <span className="text-[15px] text-[#a0a0a0]">
                  dranjugoyalhomeo.clinic@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a5d3a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                </svg>
                <span className="text-[15px] text-[#a0a0a0]">
                  Available for Online Consultations Worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3d3d3d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#707070]">
          <p>&copy; {new Date().getFullYear()} Dr. Anju&apos;s Homeo Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
