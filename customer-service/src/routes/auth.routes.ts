import express from 'express'
import { signup, login, logoutCustomer } from '@/controllers/auth.controller'
import { validateRequest } from '@yashsingh2903/ecommerce-common'
import { loginSchema, signupSchema } from '@/validator/customer.validator'

const router = express.Router()

router.post('/signup', validateRequest(signupSchema),signup)
router.post('/login', validateRequest(loginSchema),login)
router.post('/logout', logoutCustomer)

export default router
