import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 8069;

const prisma = new PrismaClient();
const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Routers Import
import { booksRouter } from "./routes/books.route";

// Routes
app.use("/api/v1/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT - ${PORT}`);
});

export { prisma };
