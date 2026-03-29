"use client";

import { useState, createContext, useContext, useCallback } from "react";

type BookingContextType = {
  open: () => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextType>({
  open: () => {},
  close: () => {},
});

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <BookingModal onClose={close} />}
    </BookingContext.Provider>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    condition: "",
    preferredDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to book");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const conditions = [
    "Hair Fall",
    "Skin Disorders",
    "Anxiety & Stress",
    "Allergies & Asthma",
    "Hormonal Balance",
    "Migraine & Headaches",
    "Arthritis & Joint Pain",
    "Diabetes Management",
    "Digestive Issues",
    "General Wellness",
    "Other",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f5f4ee] flex items-center justify-center text-[#6b6b6b] hover:bg-[#e8e6e1] hover:text-[#2b2b2b] transition-colors z-10 cursor-pointer"
          aria-label="Close"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          /* Success State */
          <div className="px-8 py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-[#4a5d3a] flex items-center justify-center mx-auto mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#2b2b2b] mb-3 font-[family-name:var(--font-playfair)]">
              Booking Received!
            </h3>
            <p className="text-[#6b6b6b] mb-8 leading-relaxed">
              Thank you, {formData.name}. We&apos;ll get back to you within 24
              hours to confirm your consultation.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#4a5d3a] text-white font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form */
          <div className="px-8 py-8">
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-[#4a5d3a] font-semibold mb-2">
                Book Consultation
              </p>
              <h3 className="text-2xl font-bold text-[#2b2b2b] font-[family-name:var(--font-playfair)]">
                Start Your Healing Journey
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#4a4a4a] mb-1.5"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#e0dfda] bg-[#faf9f6] text-[#2b2b2b] text-sm focus:outline-none focus:border-[#4a5d3a] focus:ring-1 focus:ring-[#4a5d3a] transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#4a4a4a] mb-1.5"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#e0dfda] bg-[#faf9f6] text-[#2b2b2b] text-sm focus:outline-none focus:border-[#4a5d3a] focus:ring-1 focus:ring-[#4a5d3a] transition-colors"
                  placeholder="+91 99140 99036"
                />
              </div>

              {/* Condition + Preferred Date row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="condition"
                    className="block text-sm font-medium text-[#4a4a4a] mb-1.5"
                  >
                    Condition
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    required
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#e0dfda] bg-[#faf9f6] text-[#2b2b2b] text-sm focus:outline-none focus:border-[#4a5d3a] focus:ring-1 focus:ring-[#4a5d3a] transition-colors appearance-none"
                  >
                    <option value="">Select condition</option>
                    {conditions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-[#4a4a4a] mb-1.5"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#e0dfda] bg-[#faf9f6] text-[#2b2b2b] text-sm focus:outline-none focus:border-[#4a5d3a] focus:ring-1 focus:ring-[#4a5d3a] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#4a4a4a] mb-1.5"
                >
                  Brief Description{" "}
                  <span className="text-[#a0a0a0]">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#e0dfda] bg-[#faf9f6] text-[#2b2b2b] text-sm focus:outline-none focus:border-[#4a5d3a] focus:ring-1 focus:ring-[#4a5d3a] transition-colors resize-none"
                  placeholder="Tell us briefly about your condition..."
                />
              </div>

              {/* Submit */}
              {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full bg-[#4a5d3a] text-white font-semibold text-base hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#3d4e30] transition-all duration-300 mt-1 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? "Booking..." : "Book Consultation"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
