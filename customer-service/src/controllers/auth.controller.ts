import { Request, Response, NextFunction } from 'express'
import Customer from '@models/customer.model'
import {
  hashPassword,
  comparePassword,
  generateToken,
  StatusCodes,
} from '@yashsingh2903/ecommerce-common'
import mongoose from 'mongoose'

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password } = req.body

    const existingCustomer = await Customer.findOne({ email })
    if (existingCustomer) {
      return next({
        statusCode: StatusCodes.BAD_REQUEST,
        message: 'Customer already exists',
      })
    }

    const hashedPwd = await hashPassword(password)

    const newCustomer = new Customer({
      name,
      email,
      password: hashedPwd,
    })
    await newCustomer.save()

    const token = generateToken(
      (newCustomer._id as mongoose.Types.ObjectId).toString(),
      process.env.JWT_SECRET as string
    )

    res.status(StatusCodes.CREATED).json({ token, newCustomer })
  } catch (error) {
    next(error)
  }
}

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body

    const customer = await Customer.findOne({ email })
    if (!customer) {
      return next({
        statusCode: StatusCodes.BAD_REQUEST,
        message: 'Customer does not exist',
      })
    }

    const isPasswordMatch = await comparePassword(password, customer.password)
    if (!isPasswordMatch) {
      return next({
        statusCode: StatusCodes.BAD_REQUEST,
        message: 'Invalid credentials',
      })
    }

    const token = generateToken(
      (customer._id as mongoose.Types.ObjectId).toString(),
      process.env.JWT_SECRET as string
    )

    res.status(StatusCodes.OK).json({ message: 'Login Successful', token, customer })
  } catch (error) {
    next(error)
  }
}

export const logoutCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })

    res.status(StatusCodes.OK).json({ message: 'Logged out successfully' })
  } catch (error) {
    next(error)
  }
}
