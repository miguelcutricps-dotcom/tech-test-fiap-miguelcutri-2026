import type { Metadata } from "next";
import { Figtree, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.scss";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-figtree",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "FIAP - A melhor faculdade de tecnologia",
  description:
    "Cursos e imersões. Uma nova cultura de mercado, tecnologia, inovação e negócios. Presente e futuro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${montserrat.variable}`}>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="https://cdn.react-grab.com/script.js"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
