"use client";

import { BookingProvider } from "@/components/BookingModal";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BookingProvider>{children}</BookingProvider>;
}
