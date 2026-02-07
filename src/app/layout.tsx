import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} antialiased bg-[#050a12] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
