import "tsconfig-paths/register";
import "@config/env";
import app from "@/app";
import { connectDB } from "@yashsingh2903/ecommerce-common";
import { PORT, MONGO_URI} from "@config/env";

if (!MONGO_URI) {
  throw new Error("MONGO_URI not found in .env file");
}

const startServer = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(
        `Order Service running on port ${PORT} — http://localhost:${PORT}/api/orders`
      );
    });
  } catch (err) {
    console.error("Server failed to start:", err);
  }
};

startServer();
