import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oficina de Memórias · Coração de Papel",
  description:
    "Imersão online de 2 horas com a professora Silmara: aprenda a montar um travel journal completo, combinando fotos, papéis e frases. 24 de outubro de 2026, 15h (Brasília), pelo Google Meet.",
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
