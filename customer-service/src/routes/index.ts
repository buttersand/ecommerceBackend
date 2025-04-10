import express from 'express'
import customerRoutes from '@routes/customer.routes'
import authRoutes from '@routes/auth.routes'

const router = express.Router()

router.use('/', customerRoutes)
router.use('/', authRoutes)

export default router
