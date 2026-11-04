import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oficina de Memórias · Luzia Trattoria",
  description:
    "Oficina presencial de cerca de 4 horas para montar seu álbum de memórias com fotos impressas, curadoria, diagramação e um cartão afetivo. Na Luzia Trattoria.",
};

export const viewport: Viewport = {
  themeColor: "#48503b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
