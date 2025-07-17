import express from "express";
import {
  getBloodReaction,
  getViolence,
} from "../controllers/BloodReactionController.js";
import { isLogin } from "./../middlewares/AuthMiddleware.js";

export const router = express.Router();

router.get("/getBloodReaction", getBloodReaction);
router.get("/getViolence", isLogin, getViolence);
