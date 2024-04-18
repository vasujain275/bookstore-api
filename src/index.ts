import express from "express";
import { PrismaClient } from "@prisma/client";
import { booksRouter } from "./routes/books.route";

const PORT = process.env.PORT || 8069;

const prisma = new PrismaClient();
const app = express();

// Middlewares
app.use(express.json());



app.use("/api/v1/books", booksRouter)


app.listen(PORT, () => {
  console.log(`Server is running at PORT - ${PORT}`)
})

export { prisma }
