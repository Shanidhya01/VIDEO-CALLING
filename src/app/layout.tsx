import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-iner",
});

export const metadata: Metadata = {
  title: "Video Call",
  description: "Connect with anyone, anywhere using ZEGOCLOUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-foreground antialiased ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
