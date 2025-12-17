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

      {/* PRODUTOS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8">
          Produtos em destaque
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded p-4">
              <div className="h-40 bg-gray-200 mb-4 rounded" />

              <h4 className="font-medium">
                Produto Exemplo
              </h4>

              <p className="text-sm text-gray-500">
                R$ 99,90
              </p>

              <button className="mt-3 w-full border border-black py-2 rounded hover:bg-black hover:text-white">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
