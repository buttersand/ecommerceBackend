import mongoose from "mongoose";

interface ProductAttrs{
    name:string;
    price:number;
    stock:number;
}

interface ProductDoc extends mongoose.Document{
    name:string;
    price:number;
    stock:number;
}
const productSchema=new mongoose.Schema<ProductDoc>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
});

const Product=mongoose.model<ProductDoc>("Product", productSchema);
export  {Product};