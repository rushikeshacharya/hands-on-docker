import express from "express";
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 8000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from TS Express Server 👋🏻",
  });
});

app.get("/health", (req, res) => {
  res.json({ message: "Everything is healthy 👀" });
});
// Start the Express Server
app.listen(PORT, () =>
  console.log(`Express Application Started on PORT ${PORT}`)
);
