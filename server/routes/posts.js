import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("THIS Works!");
});

export default router;
