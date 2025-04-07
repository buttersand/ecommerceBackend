import exrpess from 'express';
import { createProduct, getAllProducts } from '../controllers/product.controller';

const router = exrpess.Router();
router.post("/",createProduct); //create a new product
router.get("/", getAllProducts); //get all products

export default router;