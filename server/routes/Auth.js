import express from "express";
import {
  currentUser,
  resetPassword,
  signIn,
  staffInfo,
} from "../controllers/AuthController.js";
import { isLogin } from "../middlewares/AuthMiddleware.js";

export const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "User API OK" });
});
router.post("/signIn", signIn);
router.put("/resetPassword", resetPassword);
router.get("/current-user", isLogin, currentUser);
router.get("/staffInfo", isLogin, staffInfo);
