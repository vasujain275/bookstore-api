import { Router } from "express";
import {
  addNewcategory,
  getCategories,
  getOnecategory,
} from "../controllers/categories.controller";

const categoryRouter = Router();

categoryRouter.route("/").get(getCategories);
categoryRouter.route("/:id").get(getOnecategory);
categoryRouter.route("/").post(addNewcategory);

export { categoryRouter };
