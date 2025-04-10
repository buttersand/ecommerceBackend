import express from "express";

const router = express.Router();

router.get("/", (_, res) => {
  res.json({ message: "API Gateway is running" });
});

export default router;
