import { Router } from "express";
import {
  addNewcategory,
  deleteCategory,
  getCategories,
  getOnecategory,
  updateCategory,
} from "../controllers/categories.controller";

const categoryRouter = Router();

categoryRouter.route("/").get(getCategories);
categoryRouter.route("/:id").get(getOnecategory);
categoryRouter.route("/").post(addNewcategory);
categoryRouter.route("/:id").delete(deleteCategory);
categoryRouter.route("/:id").put(updateCategory);

export { categoryRouter };
