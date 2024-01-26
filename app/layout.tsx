import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BlurDetail } from "./assets/BlurDetail";
import { Header } from "./components/Header";
import { ThemeProvider } from "@/app/components/theme-provider"
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
      <body className={`relative ${inter.className} overflow-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <span className="-z-10 pointer-events-none absolute -left-32 -top-48"><BlurDetail /></span>
          <span className="-z-10 pointer-events-none absolute -right-64 -bottom-64"><BlurDetail /></span>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
