import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BlurDetail } from "./assets/BlurDetail";
import { Header } from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flacards App",
  description: "Flacards App - Create your own decks and flash cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} overflow-hidden`}>
        <Header />
        <span className="pointer-events-none absolute -left-32 -top-48"><BlurDetail /></span>
        <span className="pointer-events-none absolute -right-64 -bottom-64"><BlurDetail /></span>
        {children}
      </body>
    </html>
  );
}
