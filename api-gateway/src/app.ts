import express from "express";
import cors from "cors";
import serviceProxies, { proxyRequestTransfer } from "@proxy/index";

const app = express();
app.use(cors());
app.use(express.json());
app.use(proxyRequestTransfer);

export default app;
