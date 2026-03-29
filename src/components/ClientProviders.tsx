"use client";

import { BookingProvider } from "@/components/BookingModal";
import { RegionProvider } from "@/components/RegionContext";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RegionProvider>
      <BookingProvider>{children}</BookingProvider>
    </RegionProvider>
  );
}
