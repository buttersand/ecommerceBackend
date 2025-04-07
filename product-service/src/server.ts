// server.ts
import dotenv from "dotenv";
// import cors from "cors";
dotenv.config(); // Load env vars before anything else

import app from "./app";
// app.use(cors()); // Enable CORS for all routes
import { connectDB } from "@yashsingh2903/ecommerce-common"; // common DB connection

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
app.use((req, resp, next) => {
  console.log(req.body, req);
})

if (!MONGO_URI) {
  throw new Error("Mongo URI not defined in .env");
}

const startServer = async () => {
  try {
    await connectDB(MONGO_URI); // Connect to MongoDB
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server failed to start:", err);
  }
};

startServer();
