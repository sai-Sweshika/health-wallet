import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import auth from "./routes/auth.js";
import reports from "./routes/reports.js";
import vitals from "./routes/vitals.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", auth);
app.use("/api/reports", reports);
app.use("/api/vitals", vitals);

app.listen(process.env.PORT, () =>
  console.log("Backend running on port 5000")
);
