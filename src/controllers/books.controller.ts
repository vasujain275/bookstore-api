import { prisma } from "../index";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";

const getBooks = asyncHandler(async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.json(new ApiResponse(200, books, "Fetched all the books Succesfully!"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't fetched the books from the db"));
  }
});

const getOneBook = asyncHandler(async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
      include: {
        categories: true
      }
    });
    res.json(new ApiResponse(200, book, "Fetched the book Succesfully!"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't fetched the book from the db"));
  }
});

const addNewBook = asyncHandler(async (req, res) => {
  try {
    const { title, publishedYear, authorId, price, categories } = req.body;
    const book = await prisma.book.create({
      data: {
        title,
        publishedYear,
        price,
        author: {
          connect: {
            id: authorId,
          },
        },
        categories: {
          connect: categories.map((bookId: string) => ({ id: bookId })),
          // Map each bookId to { id: bookId } for Prisma to connect
        },
      },
      include: {
        categories: true,
      },
    });

    res.json(new ApiResponse(200, book, "Created new Book Entry"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't create new book entry to db"));
  }
});

const deleteBook = asyncHandler(async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedbook = await prisma.book.delete({
      where: {
        id: bookId,
      },
    });

    res.json(new ApiResponse(200, deletedbook, "Book Deleted Sucessfully"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't delete the Book"));
  }
});

const updateBook = asyncHandler(async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookData = req.body;
    const updatedBook = await prisma.book.update({
      where: {
        id: bookId,
      },
      data: bookData
    });

    res.json(new ApiResponse(200, updatedBook, "book Deleted Sucessfully"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't delete the book"));
  }
});




export { getBooks, getOneBook, addNewBook, deleteBook, updateBook };
