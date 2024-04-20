import { Router } from "express";
import {
  addNewBook,
  getOneBook,
  getBooks,
  deleteBook,
  updateBook,
} from "../controllers/books.controller";

const booksRouter = Router();

/**
 * @openapi
 * tags:
 *   name: Books
 *   description: Operations related to books
 */

/**
 * @openapi
 * /api/v1/books:
 *   post:
 *     summary: Add a new book
 *     description: Add a new book to the collection.
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the book.
 *               publishedYear:
 *                 type: integer
 *                 description: The year the book was published.
 *               authorId:
 *                 type: string
 *                 description: The ID of the author of the book.
 *               price:
 *                 type: number
 *                 description: The price of the book in INR.
 *               categories:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The ids of categories the book belongs to.
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad Request
 */
booksRouter.route("/").post(addNewBook);

/**
 * @openapi
 * /api/v1/books:
 *   get:
 *     summary: Get all books
 *     description: Get a list of all books in the collection.
 *     tags: [Books]
 *     responses:
 *       '200':
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       '404':
 *         description: No books found
 */
booksRouter.route("/").get(getBooks);
booksRouter.route("/:id").get(getOneBook);
booksRouter.route("/:id").delete(deleteBook);
booksRouter.route("/:id").put(updateBook);

export { booksRouter };
