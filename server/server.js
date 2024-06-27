import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { connectDB, sequelize } from "./DB/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//! Home Route
app.get("/", (req, res) => {
  res.send("<h1 align='center'>Welcome to Farm Marketplace</h1>");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, async () => {
  //! Database connection
  await connectDB();
  await sequelize.sync();

  console.log(`Server running on port http://localhost:${PORT}`);
});
