import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const product_router = Router();

product_router.post("/", protect, createProduct);
product_router.get("/", getProducts);

export default product_router;
