import { Request, Response, NextFunction } from 'express'
import Customer from '@/models/customer.model'
import { StatusCodes} from '@yashsingh2903/ecommerce-common'

export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return next({
        statusCode: StatusCodes.BAD_REQUEST,
        message: 'Please provide name, email, and password.',
      })
    }

    const customer = new Customer({ name, email, password })
    await customer.save()

    res.status(StatusCodes.CREATED).json({
      message: 'Customer created successfully',
      customer,
    })
  } catch (error) {
    next(error)
  }
}

export const getAllCustomers = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const customers = await Customer.find()
    res.status(StatusCodes.OK).json({ customers })
  } catch (error) {
    next(error)
  }
}
