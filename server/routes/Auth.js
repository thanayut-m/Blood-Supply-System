import express from "express";
import {
  currentUser,
  resetPassword,
  signIn,
} from "../controllers/AuthController.js";
import { isLogin } from "../middlewares/AuthMiddleware.js";

export const router = express.Router();

router.get("/current-user", isLogin, currentUser);
router.post("/signIn", signIn);
router.put("/resetPassword", resetPassword);
