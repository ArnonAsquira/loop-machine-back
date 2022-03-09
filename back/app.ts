import express from "express";
import audioRoutes from "./routes/audio";
const app = express();
import cors from "cors";

app.use(cors());

app.get("/", (_req, res) => {
  res.send("hello");
});

app.use("/audio", audioRoutes);

export default app;
