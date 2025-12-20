const produtos = [
  {
    id: 1,
    nome: "Produto Exemplo 1",
    descricao: "Descrição simples do produto.",
    preco: "R$ 99,90",
  },
  {
    id: 2,
    nome: "Produto Exemplo 2",
    descricao: "Outro produto de demonstração.",
    preco: "R$ 149,90",
  },
  {
    id: 3,
    nome: "Produto Exemplo 3",
    descricao: "Produto sustentável e de qualidade.",
    preco: "R$ 199,90",
  },
];

export default function Produtos() {
  return (
    <main className="container">
      <h2 className="titulo">Nossos Produtos</h2>

      <div className="grid-produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="card-produto">
            <div className="imagem-produto">Imagem</div>

            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <strong>{produto.preco}</strong>

            <button>Comprar</button>
          </div>
        ))}
      </div>
    </main>
  );
}
