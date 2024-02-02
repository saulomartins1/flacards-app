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
      <body className={`${inter.className} bg-stone-900 overflow-hidden h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col relative my-0 mx-auto max-w-[360px] px-4 bg-background overflow-y-auto h-full text-text">
            <Header />
            {children}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
