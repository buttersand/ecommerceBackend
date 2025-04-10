import { Request, Response, NextFunction } from 'express';
import Order from '@models/order.model';
import {
  StatusCodes,
  errorResponse,
  successResponse,
} from '@yashsingh2903/ecommerce-common';

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { customerId, productId, quantity, status } = req.body;

    if (!customerId || !productId || quantity === undefined) {
      const { statusCode, body } = errorResponse(
        'customerId, productId and quantity are required',
        StatusCodes.BAD_REQUEST
      );
      res.status(statusCode).json(body);
      return;
    }

    const order = new Order({ customerId, productId, quantity, status });
    await order.save();

    const { statusCode, body } = successResponse(
      'Order created successfully',
      order,
      StatusCodes.CREATED
    );
    res.status(statusCode).json(body);
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const orders = await Order.find();

    const { statusCode, body } = successResponse(
      'Fetched all orders',
      orders,
      StatusCodes.OK
    );
    res.status(statusCode).json(body);
  } catch (error) {
    next(error);
  }
};
