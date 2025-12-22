import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Produto Teste 1",
        description: "Descrição do produto 1",
        price: 19.9,
      },
      {
        name: "Produto Teste 2",
        description: "Descrição do produto 2",
        price: 29.9,
      },
      {
        name: "Produto Teste 3",
        description: "Descrição do produto 3",
        price: 49.9,
      },
    ],
  });

  console.log("🌱 Seed executado com sucesso");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
