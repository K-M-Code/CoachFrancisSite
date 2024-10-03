import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coach Oye",
  description: "Coach Francis Oye",
};

import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
