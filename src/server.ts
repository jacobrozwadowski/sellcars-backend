import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Import routes
import auth from "./routes/auth";
import customers from "./routes/customers";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

/*
I started implementing the backend, but the time was not enough for me to finish it.

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
*/

// Connect to Database
mongoose.connect(String(process.env.MONGODB_URI));

app.use("/auth", auth);
app.use("/api", customers);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
