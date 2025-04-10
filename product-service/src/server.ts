import "tsconfig-paths/register";
import "@config/env";

import app from "@/app";
import { connectDB } from "@yashsingh2903/ecommerce-common";
import { MONGO_URI, PORT } from "@config/env";


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
