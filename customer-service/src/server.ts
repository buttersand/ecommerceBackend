import 'tsconfig-paths/register'
import { envConfig } from '@config/env'
import app from '@/app'
import { connectDB } from '@yashsingh2903/ecommerce-common'

const { PORT, MONGO_URI } = envConfig

if (!MONGO_URI) {
    throw new Error('Mongo URI not defined in environment')
}

const startServer = async () => {
    try {
        await connectDB(MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Customer Service running on port ${PORT}`)
        })
    } catch (err) {
        console.error('Customer Service failed to start:', err)
    }
}

startServer()
