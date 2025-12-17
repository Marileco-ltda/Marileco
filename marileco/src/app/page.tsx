import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Beleza, saúde e bem-estar direto no seu lar
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Compre com segurança. Nós cuidamos de tudo do pedido à entrega.
        </p>

        <button
          style={{
            padding: "15px 30px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Ver produtos
        </button>
      </main>

      <Footer />
    </>
  );
}
