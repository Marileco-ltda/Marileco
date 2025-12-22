"use client";

import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";

type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
};

export default function ProdutosPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  async function loadProducts() {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  }

  async function deleteProduct(id: string) {
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    loadProducts();
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Produtos</h1>

      <ProductForm
        onSaved={() => {
          setEditing(null);
          loadProducts();
        }}
        editing={editing}
      />

      <hr />

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: 12 }}>
          <strong>{p.name}</strong> — R$ {p.price}
          <br />
          {p.description}
          <br />

          <button onClick={() => setEditing(p)}>Editar</button>
          <button onClick={() => deleteProduct(p.id)}>Excluir</button>
        </div>
      ))}
    </main>
  );
}
