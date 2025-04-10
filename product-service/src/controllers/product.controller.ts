import { Request, Response, NextFunction } from "express";
import { Product } from "@/models/product.model";
import {
  successResponse,
  errorResponse,
  StatusCodes,
} from "@yashsingh2903/ecommerce-common";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { name, price, stock } = req.body;

    if (!name || !price || !stock) {
      const { statusCode, body } = errorResponse(
        "Please provide name, price, and stock",
        StatusCodes.BAD_REQUEST,
      );
      res.status(statusCode).json(body);
      return;
    }

    const product = new Product({ name, price, stock });
    await product.save();

    const { statusCode, body } = successResponse(
      "Product created successfully",
      product,
      StatusCodes.CREATED,
    );
    res.status(statusCode).json(body);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  console.log(req);
  try {
    const products = await Product.find();

    const { statusCode, body } = successResponse(
      "Products fetched successfully",
      products,
      StatusCodes.OK,
    );
    res.status(statusCode).json(body);
  } catch (error) {
    next(error);
  }
};
