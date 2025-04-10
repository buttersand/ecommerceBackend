import express from "express";
import { errorHandler } from "@yashsingh2903/ecommerce-common";
import routes from "@routes";

const app = express();

app.use(express.json());

app.use("/", routes);

app.use(errorHandler);

export default app;
