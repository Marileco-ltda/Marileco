"use client";

import { useEffect, useState } from "react";

type Supplier = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
};

export default function FornecedoresPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    fetch("/api/fornecedores")
      .then((res) => res.json())
      .then(setSuppliers);
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Fornecedores</h1>

      {suppliers.map((s) => (
        <div key={s.id}>
          <strong>{s.name}</strong>
          <br />
          {s.email}
          <br />
          {s.phone}
          <hr />
        </div>
      ))}
    </main>
  );
}
