import {Product} from "../models/product.model";
import {NextFunction, Request,Response} from "express";



//function to create a new product
export const createProduct=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const {name,price,stock}=req.body;
if(!name || !price || !stock){
    res.status(400).json({message:"Please provide all fields"});
    return;
}
const  product=new Product({name,price,stock});
await product.save();
res.status(201).json({message:"Product created successfully",product});
return;
    } catch (err) {
        next(err);
    }

}


// function to get all products
export const getAllProducts=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const products=await Product.find();//find all products
        res.status(200).json({products});//return all products
    } catch (error) {
        next(error);
    }
}


