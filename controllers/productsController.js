import productModel from '../models/productModel.js'
import fs from 'fs';
import slugify from 'slugify';

export const createProductController = async (req, res) => {
    try {
        const { name, slug, discreption, price, category, quantity, shipping } = req.fields
        const { photo } = req.files;

        // validation 
        switch (true) {
            case !name:
                return res.status(500).send({ message: "name is required" })
            case !discreption:
                return res.status(500).send({ message: "discreption is required" })
            case !price:
                return res.status(500).send({ message: "price is required" })
            case !category:
                return res.status(500).send({ message: "category is required" })
            case !quantity:
                return res.status(500).send({ message: "quentity is required" })
            case photo && photo.size > 1000000:
                return res.status(500).send({ message: "photo is required and should be less then 1mb" })

        }
        const products = new productModel({ ...req.fields, slug: slugify(name) })
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save();
        res.status(201).send({
            success: true,
            message: "product created successfully",
            products,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in createProductController"
        })
    }
}

// get all product
export const getAllProductController = async (req, res) => {
    try {
        const products = await productModel.find({}).select("-photo").limit(12).sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            totalCount: products.length,
            message: "All product",
            products,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in getAllProductController"
        })
    }
}

// single product
export const singleProductController = async (req, res) => {
    try {
        const product = await productModel.findOne({ slug: req.params.slug }).select("-photo");
        res.status(200).send({
            success: true,
            message: "single product fetched",
            product,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in singleProductController"
        })
    }
}

// delete product
export const deleteProductController = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.pid).select('-photo');
        res.status(200).send({
            success: true,
            message: "product delete successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while deleting product"
        })
    }
}

// update product
export const updateProductController = async (req, res) => {
    try {
        const { name, discreption, price, category, quantity } = req.fields
        const { photo } = req.files;

        // validation 
        switch (true) {
            case !name:
                return res.status(500).send({ message: "name is required" })
            case !discreption:
                return res.status(500).send({ message: "discreption is required" })
            case !price:
                return res.status(500).send({ message: "price is required" })
            case !category:
                return res.status(500).send({ message: "category is required" })
            case !quantity:
                return res.status(500).send({ message: "quentity is required" })
            case photo && photo.size > 1000000:
                return res.status(500).send({ message: "photo is required and should be less then 1mb" })

        }
        const product = await productModel.findByIdAndUpdate(req.params.pid);

        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }

        // Update product fields
        product.name = name;
        product.discreption = discreption;
        product.price = price;
        product.category = category;
        product.quantity = quantity;
        product.slug = slugify(name);

        // Update product photo if provided
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        await product.save();
        res.status(201).send({
            success: true,
            message: "product update successfully",
            product,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while update product"
        })
    }
}

//  product photos 
export const productPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select('photo');
        if (product.photo.data) {
            res.set("Content-type", product.photo.contentType);
            return res.status(200).send(product.photo.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in while geting photo"
        })
    }
}