import express from 'express'
import { signup, login, logoutCustomer } from '@/controllers/auth.controller'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logoutCustomer)

export default router
