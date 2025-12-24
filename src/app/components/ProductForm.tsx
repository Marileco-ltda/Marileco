"use client";

import { useState } from "react";

export default function ProductForm({ onSaved, editing }: any) {
  const [name, setName] = useState(editing?.name ?? "");
  const [description, setDescription] = useState(editing?.description ?? "");
  const [price, setPrice] = useState(editing?.price ?? 0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // 🔴 ESSENCIAL

    await fetch("/api/products", {
      method: editing ? "PUT" : "POST",
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
    setPrice(0);

    onSaved();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="Preço"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <button type="submit">
        {editing ? "Atualizar" : "Criar"}
      </button>
    </form>
  );
}
