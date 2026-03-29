"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useBooking } from "@/components/BookingModal";

const navLinks = [
  { label: "Conditions", href: "#conditions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Homeopathy", href: "#why-homeopathy" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open: openBooking } = useBooking();

  return (
    <nav className="w-full bg-[#faf9f6] border-b border-[#e8e6e1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Dr. Anju's Homeo Clinic"
            width={44}
            height={44}
            className="object-contain"
          />
          <span className="text-xl font-semibold text-[#2b2b2b] tracking-tight">
            Dr. Anju&apos;s Homeo Clinic
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] text-[#4a4a4a] hover:text-[#2b3a1d] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book Appointment Button */}
        <button
          onClick={openBooking}
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-[#4a5d3a] text-white text-sm font-medium hover:bg-[#3d4e30] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Book Appointment
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#2b2b2b] transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2b2b2b] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2b2b2b] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#faf9f6] border-t border-[#e8e6e1] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] text-[#4a4a4a] hover:text-[#2b3a1d] font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#4a5d3a] text-white text-sm font-medium hover:bg-[#3d4e30] transition-colors mt-2 cursor-pointer"
            onClick={() => { setMobileOpen(false); openBooking(); }}
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}
