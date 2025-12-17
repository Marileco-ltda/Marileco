import Cabecalho from "./components/Cabecalho";

export default function Home() {
  return (
    <>
      <Cabecalho />

      <main
        style={{
          padding: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1>Bem-vindo à Marileco</h1>
        <p>Loja em construção 🚧</p>
      </main>
    </>
  );
}
