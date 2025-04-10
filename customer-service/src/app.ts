import express from 'express'
import { errorHandler } from '@yashsingh2903/ecommerce-common'
import customerRoutes from '@routes/customer.routes'

const app = express()

app.use(express.json())
app.use('/api/customers', customerRoutes)
app.use(errorHandler)

export default app
