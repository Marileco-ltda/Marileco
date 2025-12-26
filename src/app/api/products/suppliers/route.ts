import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supplierSchema } from "@/lib/validators/supplier";

/* GET */
export async function GET() {
  const suppliers = await prisma.supplier.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(suppliers);
}

/* POST */
export async function POST(req: Request) {
  const body = await req.json();

  const parsed = supplierSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const supplier = await prisma.supplier.create({
    data: parsed.data,
  });

  return NextResponse.json(supplier, { status: 201 });
}
