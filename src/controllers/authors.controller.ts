import { prisma } from "..";
import { Author } from "@prisma/client";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";

// getAllAuthors
const getAuthors = asyncHandler(async (req, res, next) => {
  try {
    const authors: Author = await prisma.author.findMany();
    console.log(authors)
    res
      .json(
        new ApiResponse(200, authors, "Fetched all the Authors Succesfully!")
      );
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res
      .json(new ApiError(500, "Can't fetched the Authors from the db"));
  }
});

// getOneAuthors

// addNewAuthor

// updateAuthor

// DeleteAuthor

export { getAuthors };
