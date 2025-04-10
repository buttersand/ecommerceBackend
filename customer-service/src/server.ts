import 'tsconfig-paths/register'
import { PORT, MONGO_URI } from '@config/env'
import app from '@/app'
import { connectDB, logger } from "@yashsingh2903/ecommerce-common"

if (!MONGO_URI) {
  throw new Error('Mongo URI not defined in environment')
}

const startServer = async () => {
  try {
    await connectDB(MONGO_URI)
    app.listen(PORT, () => {
      logger.info(`Customer Service running on port ${PORT}`)
    })
  } catch (err) {
    logger.error('Customer Service failed to start', err)
  }
}

startServer()
