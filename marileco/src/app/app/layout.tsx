import React from "react";
import "./globals.css";

export const metadata = {
  title: "Marileco — Beleza, Saúde & Bem-Estar",
  description: "Marileco | E-commerce nacional de beleza e bem-estar"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
