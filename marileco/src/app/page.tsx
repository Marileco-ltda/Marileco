import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";

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
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Beleza, saúde e bem-estar direto no seu lar
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Compre com segurança. A Marileco cuida de todo o pedido do início ao fim.
        </p>
      </main>

      <Footer />
    </>
  );
}
