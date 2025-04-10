import "tsconfig-paths/register"; 
import env from "@config/env.config";
import app from "@app";

const start = async () => {
  try {
    app.listen(env.PORT, () => {
      console.log(`API Gateway running on port ${env.PORT}`);
    });
  } catch (err) {
    console.error("Failed to start API Gateway:", err);
  }
};

start();
