import { prisma } from "..";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";

// getAllAuthors
const getAuthors = asyncHandler(async (req, res) => {
  try {
    const authors = await prisma.author.findMany({
      include: {
        books: true,
      },
    });
    res.json(
      new ApiResponse(200, authors, "Fetched all the Authors Succesfully!")
    );
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't fetched the Authors from the db"));
  }
});

// getOneAuthors
const getOneAuthor = asyncHandler(async (req, res) => {
  try {
    const authorId = req.params.id;
    const author = await prisma.author.findUnique({
      where: {
        id: authorId,
      },
      include: {
        books: true,
      },
    });
    res.json(new ApiResponse(200, author, "Fetched the Author Succesfully!"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't fetched the Author from the db"));
  }
});

// addNewAuthor
const addNewAuthor = asyncHandler(async (req, res) => {
  try {
    const { name, email } = req.body;
    const author = await prisma.author.create({
      data: {
        name,
        email,
      },
    });

    res.json(new ApiResponse(200, author, "Created new Author Entry"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't create new author entry to db"));
  }
});

// DeleteAuthor

const deleteAuthor = asyncHandler(async (req, res) => {
  try {
    const authorId = req.params.id;
    const deletedAuthor = await prisma.author.delete({
      where: {
        id: authorId,
      },
    });

    res.json(new ApiResponse(200, deletedAuthor, "Author Deleted Sucessfully"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't delete the Author"));
  }
});

const updateAuthor = asyncHandler(async (req, res) => {
  try {
    const authorId = req.params.id;
    const authorData = req.body;
    const updatedAuthor = await prisma.author.update({
      where: {
        id: authorId,
      },
      data: authorData
    });

    res.json(new ApiResponse(200, updatedAuthor, "Author Deleted Sucessfully"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't delete the author"));
  }
});



export { getAuthors, getOneAuthor, addNewAuthor, deleteAuthor, updateAuthor };
