import "tsconfig-paths/register";
import app from "@app";
import env from "@config/env.config";

app.listen(env.PORT, () => {
  console.log(`API Gateway running on port ${env.PORT}`);
});
