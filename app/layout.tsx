import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coach Oye",
  description: "Coach Francis Oye",
};

import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="https://umami.coachme2.fi/script.js" data-website-id="6cd475c0-9c05-4916-86f7-71008fc18755"></script>
      <body>
        <Header />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
