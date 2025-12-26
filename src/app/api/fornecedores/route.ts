import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supplierSchema } from "@/lib/validators/supplier";

/* =========================
   GET – listar fornecedores
========================= */
export async function GET() {
  const suppliers = await prisma.supplier.findMany({
    orderBy: { name: "asc" },
  });

  return NextResponse.json(suppliers);
}

/* =========================
   POST – criar fornecedor
========================= */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = supplierSchema.parse(body);

    const supplier = await prisma.supplier.create({
      data: {
        name: data.name,
        email: data.email || null,
        phone: data.phone || null,
      },
    });

    return NextResponse.json(supplier, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Dados inválidos",
        details: error.errors ?? null,
      },
      { status: 400 }
    );
  }
}
