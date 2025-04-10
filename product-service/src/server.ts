import "tsconfig-paths/register";
import "@config/env";

import app from "@/app";
import { connectDB } from "@yashsingh2903/ecommerce-common";
import { envConfig } from "@config/env";

const { MONGO_URI, PORT } = envConfig;

if (!MONGO_URI) {
  throw new Error("Mongo URI not defined in .env");
}

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Product Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start Product Service:", err);
  }
};

start();
