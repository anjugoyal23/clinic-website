"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Region = "US" | "IN";

interface RegionContextType {
  region: Region;
  currency: string;
  formatPrice: (usd: number) => string;
}

const RegionContext = createContext<RegionContextType | null>(null);

// Fixed INR prices mapped from USD
const INR_PRICES: Record<number, number> = {
  60: 2500,
  40: 1800,
  39: 1500,
  29: 1000,
};

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<Region>("US");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code === "IN") setRegion("IN");
      })
      .catch(() => {});
  }, []);

  const currency = region === "US" ? "$" : "₹";

  const formatPrice = (usd: number) => {
    if (region === "US") return `$${usd}`;
    const inr = INR_PRICES[usd] ?? Math.round(usd * 85);
    return `₹${inr.toLocaleString("en-IN")}`;
  };

  return (
    <RegionContext.Provider value={{ region, currency, formatPrice }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const ctx = useContext(RegionContext);
  if (!ctx) throw new Error("useRegion must be used within RegionProvider");
  return ctx;
}
