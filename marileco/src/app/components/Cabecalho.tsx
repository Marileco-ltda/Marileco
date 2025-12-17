import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="header">
      <h1>MARILECO</h1>

      <nav>
        <Link href="/">Início</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}
