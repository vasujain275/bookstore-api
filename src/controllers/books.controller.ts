import { prisma } from "../index";
import { Response, Request } from "express";
import { Book } from "@prisma/client";

const addBooks = async (req: Request, res: Response) => {
  const { title, publishedYear, authorId, price } = req.body;
  try {
    const book: Book = await prisma.book.create({
      data: {
        title,
        publishedYear,
        price,
        author: {
          connect: { id: authorId },
        },
      },
    });

    res.status(200).json({
      book: book,
    });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.status(500).json({
      message: "Error creating book data to database",
    });
  }
};

const getbooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200).json({
      books: books,
    });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.status(500).json({
      message: "Error retriving Books data from db",
    });
  }
};

const getOneBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const book = await prisma.book.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      book: book,
    });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.status(500).json({
      message: "Error retriving Book data from db",
    });
  }
};

export { addBooks, getbooks, getOneBook };
