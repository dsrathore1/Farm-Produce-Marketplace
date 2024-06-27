import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { connectDB, sequelize } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, async () => {
  //! Database connection
  await connectDB();
  await sequelize.sync();

  console.log(`Server running on port ${PORT}`);
});
