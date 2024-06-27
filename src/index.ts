import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerDocs from "./utils/swagger";

const PORT: number = Number.parseInt(<string>process.env.PORT, 10) || 8069;

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
import { authorRouter } from "./routes/authors.route";
import { categoryRouter } from "./routes/categories.route";

// Routes
app.use("/api/v1/books", booksRouter);
app.use("/api/v1/authors", authorRouter);
app.use("/api/v1/categories", categoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT - ${PORT}`);
});

swaggerDocs(app, PORT);

export { prisma };
