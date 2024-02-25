import express from 'express'
import { createProductController, deleteProductController, getAllProductController, productPhotoController, singleProductController, updateProductController } from '../controllers/productsController.js';
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
router.delete('/delete-product/:pid',requireSignIn, isAdmin, deleteProductController);

//Update  product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable, updateProductController);

// get single photo
router.get('/product-photo/:pid', productPhotoController)

export default router;