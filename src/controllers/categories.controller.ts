import { prisma } from "..";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";

// getAllCategories
const getCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        books: true,
      },
    });
    res.json(
      new ApiResponse(
        200,
        categories,
        "Fetched all the Categories Succesfully!"
      )
    );
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't fetched the Categories from the db"));
  }
});

// getOneCategories
const getOnecategory = asyncHandler(async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      include: {
        books: true,
      },
    });
    res.json(
      new ApiResponse(200, category, "Fetched the category Succesfully!")
    );
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't fetched the category from the db"));
  }
});

// addNewcategory
const addNewcategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    res.json(new ApiResponse(200, category, "Created new category Entry"));
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't create new category entry to db"));
  }
});

// updatecategory
const updateCategory = asyncHandler(async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryData = req.body;
    const updatedCategory = await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: categoryData,
    });

    res.json(
      new ApiResponse(200, updatedCategory, "Category Deleted Sucessfully")
    );
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't delete the Category"));
  }
});

// Deletecategory
const deleteCategory = asyncHandler(async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });

    res.json(
      new ApiResponse(200, deletedCategory, "Category Deleted Sucessfully")
    );
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.json(new ApiError(500, "Can't delete the Category"));
  }
});

export {
  getCategories,
  getOnecategory,
  addNewcategory,
  deleteCategory,
  updateCategory,
};
