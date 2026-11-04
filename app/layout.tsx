import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oficina de Memórias · com Andréa Koetzler",
  description:
    "Oficina presencial de cerca de 4 horas para montar seu álbum de memórias com fotos impressas, curadoria, diagramação e um cartão afetivo, com Andréa Koetzler. Na Luzia Trattoria.",
};

export const viewport: Viewport = {
  themeColor: "#48503b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
