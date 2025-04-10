import dotenv from 'dotenv';
dotenv.config();
if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing in .env file");
  }
  
  if (!process.env.PORT) {
    console.warn("PORT not specified in .env, defaulting to 5003");
  }
  export const envConfig = {
    PORT: process.env.PORT ? Number(process.env.PORT) : 5003,
    MONGO_URI: process.env.MONGO_URI || '',
    JWT_SECRET: process.env.JWT_SECRET || 'default_secret', 
    NODE_ENV: process.env.NODE_ENV || 'development',
  }