import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SchoolWaze - Smart School Traffic Management",
  description: "Revolutionizing school drop-off and pick-up with smart routing, carpool matching, and real-time traffic management.",
  keywords: ["school traffic", "carpool", "smart routing", "traffic management", "education"],
  authors: [{ name: "SchoolWaze Team" }],
  openGraph: {
    title: "SchoolWaze - Smart School Traffic Management",
    description: "Revolutionizing school drop-off and pick-up with smart routing, carpool matching, and real-time traffic management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
