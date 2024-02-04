import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import auth from "./routes/auth";
import customers from "./routes/customers";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Connect to MongoDB
mongoose.connect(String(process.env.MONGODB_URI));

app.use("/auth", auth);
app.use("/api", customers);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
