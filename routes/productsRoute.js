import express from 'express'
import { createProductController, deleteProductController, getAllProductController, singleProductController, updateProductController } from '../controllers/productsController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from 'express-formidable'


const router = express.Router();

//routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

//get all products
router.get('/get-product', getAllProductController);

//get single product
router.get('/single-product/:slug', singleProductController);

//Delete product
router.delete('/delete-product', requireSignIn, isAdmin, deleteProductController);

//Update  product
router.put('/update-product', requireSignIn, isAdmin, updateProductController);


export default router;