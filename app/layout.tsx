import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { ThemeProvider } from "@/app/providers/theme-provider"
import "./globals.css";
import AuthProvider from "./providers/auth";

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
      <AuthProvider>
      <body className={`${inter.className} dark:bg-background`}>
        <div className="m-4">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </div>
      </body>
      </AuthProvider>
    </html>
  );
}
