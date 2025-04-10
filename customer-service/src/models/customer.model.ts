import mongoose from 'mongoose'
import { hashPassword } from '@yashsingh2903/ecommerce-common'
export interface CustomerAttr {
    name: string
    email: string
    password: string
}

export interface CustomerDoc extends mongoose.Document {
    name: string
    email: string
    password: string
}

const customerSchema = new mongoose.Schema<CustomerDoc>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

customerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await hashPassword(this.password)
    next()
})
const Customer = mongoose.model<CustomerDoc>('Customer', customerSchema)
export default Customer
