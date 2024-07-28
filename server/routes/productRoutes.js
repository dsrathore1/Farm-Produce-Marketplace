import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";

const product_router = Router();

product_router.post("/", createProduct);
product_router.get("/", getProducts);

export default product_router;
