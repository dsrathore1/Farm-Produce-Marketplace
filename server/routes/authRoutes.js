import { Router } from "express";
import { registerUser, loginUser } from "controllers/authController.js";

const auth_router = Router();

auth_router.post("/register", registerUser);
auth_router.post("/login", loginUser);

export default auth_router;
