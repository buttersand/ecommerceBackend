import { Request, Response, NextFunction } from 'express'
import Customer from '@models/customer.model'
import {
    hashPassword,
    comparePassword,
    generateToken,
} from '@yashsingh2903/ecommerce-common'
import mongoose from 'mongoose'

export const signup = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.status(400).json({
                message: 'Please provide name, email and password',
            })
            return
        }
        const existingCustomer = await Customer.findOne({ email })
        if (existingCustomer) {
            res.status(400).json({ message: 'Customer already exists' })
            return
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
        res.status(201).json({ token, newCustomer })
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
        if (!email || !password) {
            res.status(400).json({
                message: 'Please provide email and password',
            })
            return
        }
        const customer = await Customer.findOne({ email })
        if (!customer) {
            res.status(400).json({ message: 'Customer does not exist' })
            return
        }
        const isPasswordMatch = await comparePassword(
            password,
            customer.password
        )
        if (!isPasswordMatch) {
            res.status(400).json({ message: 'Invalid credentials' })
            return
        }
        const token = generateToken(
            (customer._id as mongoose.Types.ObjectId).toString(),
            process.env.JWT_SECRET as string
        )
        res.status(200).json({ message: 'Login Successfull', token, customer })
    } catch (error) {
        next(error)
    }
}
export const logoutCustomer = async (req: Request, res: Response) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    })

    res.status(200).json({ message: 'Logged out successfully' })
}
