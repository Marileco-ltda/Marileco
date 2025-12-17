import Link from "next/link";

export default function Cabecalho() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h1 style={{ margin: 0 }}>MARILECO</h1>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Início</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}
