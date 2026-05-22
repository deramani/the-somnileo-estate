import type { Metadata } from "next";
import { Cinzel, Spectral } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title: "The Estate",
  description: "A haunted collection of art, horror, stories, forgotten roads, and strange worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${spectral.variable} bg-[#020203] text-[#E5DED3]`}
      >
        {children}
      </body>
    </html>
  );
}