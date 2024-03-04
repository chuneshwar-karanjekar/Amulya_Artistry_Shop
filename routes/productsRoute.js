import express from 'express'
import { createProductController, deleteProductController, getAllProductController, productCategoryController, productCountController, productFilterController, productListController, productPhotoController, similarProductController, singleProductController, updateProductController } from '../controllers/productsController.js';
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

//filter product
router.post('/product-filter', productFilterController)

// count product
router.get('/product-count', productCountController)

// product per page
router.get('/product-list/:page', productListController)
 
//  category wise product
router.get('/product-category/:slug', productCategoryController )

// get similar product
router.get('/similar-product/:pid/:cid', similarProductController)

export default router;