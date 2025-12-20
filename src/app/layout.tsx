import "./globals.css";
import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";

export const metadata = {
  title: "Marileco",
  description: "Loja Marileco",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho />
        {children}
        <Footer />
      </body>
    </html>
  );
}