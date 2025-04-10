import express from "express";
import routes from "@routes/index";
import serviceProxies from "@proxy/index";

const app = express();

app.use(express.json());

Object.entries(serviceProxies).forEach(([route, proxy]) => {
  app.use(`/api/${route}`, proxy);
});

app.use("/", routes);

export default app;
