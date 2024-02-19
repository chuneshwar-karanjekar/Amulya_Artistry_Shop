import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createCategoryController, updateCategory } from "../controllers/createCategoryController.js";

const router = express.Router();

//create category Route
router.post("/create-category", requireSignIn, isAdmin, createCategoryController)

//Update category Route
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategory)

export default router;