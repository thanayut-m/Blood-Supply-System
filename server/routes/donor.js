import express from "express";
import { getDonorList } from "../controllers/DonorController.js";
import { isLogin } from "../middlewares/AuthMiddleware.js";

export const router = express.Router();

router.get("/getDonorList", isLogin, getDonorList);
