import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/* =========================
   GET – listar produtos
========================= */
export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(products);
}

/* =========================
   POST – criar produto
========================= */
import { productSchema } from "@/lib/validators/product";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = productSchema.parse({
      ...body,
      price: Number(body.price),
    });

    const product = await prisma.product.create({
      data,
    });

    return NextResponse.json(product, { status: 201 });

  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}


/* =========================
   PUT – atualizar produto
========================= */
export async function PUT(req: Request) {
  const body = await req.json();

  const product = await prisma.product.update({
    where: { id: body.id },
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
    },
  });

  return NextResponse.json(product);
}

/* =========================
   DELETE – deletar produto
========================= */
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID não informado" },
      { status: 400 }
    );
  }

  await prisma.product.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
