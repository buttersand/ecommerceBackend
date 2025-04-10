import dotenv from "dotenv";
dotenv.config();
export const envConfig = {
    PORT: process.env.PORT ? Number(process.env.PORT) : 5002,
    MONGO_URI: process.env.MONGO_URI || '',
    JWT_SECRET: process.env.JWT_SECRET || 'default_secret', 
    NODE_ENV: process.env.NODE_ENV || 'development',
  }