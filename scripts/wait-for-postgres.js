// wait-for-postgres.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  while (true) {
    try {
      await prisma.$connect();
      console.log("Postgres is up - executing command");
      process.exit(0);
    } catch (error) {
      console.log("Postgres is unavailable - sleeping");
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
