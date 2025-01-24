import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Simone Traversi - Technology enthusiast",

  description:
    "Simone Traversi is a technology enthusiast in all its forms. He loves combining software and hardware to create innovative solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-black"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-black  flex-1 overflow-y-auto">
          <div className="flex-1 bg-neutral-900 min-h-screen lg:rounded-xl border border-transparent lg:border-neutral-700 overflow-y-auto ">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
