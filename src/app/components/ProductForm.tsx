"use client";

import { useEffect, useState } from "react";

type Product = {
  id?: string;
  name: string;
  description?: string;
  price: number;
};

export default function ProductForm({
  onSaved,
  editing,
}: {
  onSaved: () => void;
  editing: Product | null;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setDescription(editing.description || "");
      setPrice(String(editing.price));
    }
  }, [editing]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const method = editing ? "PUT" : "POST";

    await fetch("/api/products", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editing?.id,
        name,
        description,
        price: Number(price),
      }),
    });

    setName("");
    setDescription("");
    setPrice("");
    onSaved();
  }

  return (
    <form onSubmit={submit}>
      <h2>{editing ? "Editar produto" : "Novo produto"}</h2>

      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <br />

      <input
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <input
        placeholder="Preço"
        type="number"
        step="0.01"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <br />

      <button type="submit">
        {editing ? "Atualizar" : "Criar"}
      </button>
    </form>
  );
}
