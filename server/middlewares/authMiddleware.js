import  JWT  from "jsonwebtoken";
import userModel from "../models/userModel.js";

// protected routes token base
/* requireSignIn is a middleware */
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET // Encrypt here
        );
        req.user = decode;  //  Decrypt here
        next();
    } catch (error) {
        console.log(error);
    }
}; 

// Admin Access Middleware
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: 'UnAuthorized Admin Access',
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: "Error in Admin middleware",
        });
    }
};
