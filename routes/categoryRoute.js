import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createCategoryController, deleteCategory, getCategoryController, singleCategoryController, updateCategory } from "../controllers/createCategoryController.js";

const router = express.Router();

//create category Route
router.post("/create-category", requireSignIn, isAdmin, createCategoryController)

//Update category Route
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategory)

//Delete category Route
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategory)

//Get All category Route
router.get("/get-category", getCategoryController)

//Get Single category Route
router.get("/single-category/:slug", singleCategoryController)

export default router;