import slugify from "slugify"
import categoryModel from "../models/categoryModel.js"

// create category controller
export const createCategoryController = async (req, res)=>{
try {
    const {name} = req.body
    if(!name){
        return res.status(401).send({message:"Category name is required."})
    }
    const existingCategory = await categoryModel.findOne({name})
    if(existingCategory){
        return res.status(200).send({
            success:true,
            message:"Category already exisits"
        })
    }
    const category = await new categoryModel({name,slug:slugify(name)}).save()
    res.status(201).send({
        success:true,
        message:"New Category create",
        category,
    });
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        error,
        message:"Error in createCategoryController"
    })
}
}


// update category controller
export const updateCategory = async(req, res) => {
try {
    const {name} = req.body;
    const {id} = req.params;

    const category = await categoryModel.findByIdAndUpdate(
        id,
        {name, slug:slugify(name)},
        {new: true}
    );
    res.status(200).send({
        success:true,
        message: "Category Update successfully",
        category,
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        error,
        message:"Error in update category.",
    })
}
}