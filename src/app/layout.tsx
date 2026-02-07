import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollToTop } from "@/components/scroll-to-top";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TecnoPlay - O Aplicativo Híbrido",
  description: "Assista filmes, séries e canais ao vivo no melhor aplicativo híbrido do Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased bg-[#050a12] text-white`}
      >
        <SmoothScroll>
          <ScrollToTop />
          <Preloader />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

