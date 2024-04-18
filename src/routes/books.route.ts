import { Router } from "express";
import { addBooks } from "../controllers/books.controller";


const booksRouter = Router();


booksRouter.route("/").post(addBooks);


export { booksRouter }
