import express from 'express';
import {
    registerController,
    loginController,
    testController,
    forgotUserPasswordController
} from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';

// router object 
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

//Forgot Passsword || POST
router.post("/forgot-password",forgotUserPasswordController)

// test routes
router.get('/test',requireSignIn, isAdmin, testController);

//Protected user route auth
router.get("/user-auth", requireSignIn, (req,res) =>{
    res.status(200).send({ok:true});
});

//Protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req,res) =>{
    res.status(200).send({ok:true});
});

export default router;