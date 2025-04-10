import { Request, Response, NextFunction } from 'express'
import Customer from '@/models/customer.model'

export const createCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.status(400).json({
                message: 'Please provide name, email, and password.',
            })
            return
        }

        const customer = new Customer({ name, email, password })
        await customer.save()
        res.status(201).json({
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
        res.status(200).json({ customers })
    } catch (err) {
        next(err)
    }
}
