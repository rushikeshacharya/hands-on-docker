import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: `Hello From TS Server`,
  });
});

export default app;
