import "./globals.css";

export const metadata = {
  title: "Marileco",
  description: "E-commerce Marileco",
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
