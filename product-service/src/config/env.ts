import dotenv from 'dotenv'
dotenv.config()

export const envConfig = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 4000,
  MONGO_URI: process.env.MONGO_URI || '',
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
}

export const { PORT, MONGO_URI, JWT_SECRET } = envConfig
