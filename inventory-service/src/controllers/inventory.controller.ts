import { Request, Response, NextFunction } from 'express'
import Inventory from '@models/inventory.model'
import {
  StatusCodes,
  errorResponse,
  successResponse,
} from '@yashsingh2903/ecommerce-common'

export const addInventory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { productId, quantity } = req.body

    if (!productId || quantity === undefined) {
      const { statusCode, body } = errorResponse(
        'Provide productId and quantity',
        StatusCodes.BAD_REQUEST
      )
      res.status(statusCode).json(body)
      return
    }

    const inventory = new Inventory({ productId, quantity })
    await inventory.save()

    const { statusCode, body } = successResponse(
      'Inventory item added',
      inventory,
      StatusCodes.CREATED
    )
    res.status(statusCode).json(body)
  } catch (error) {
    next(error)
  }
}
