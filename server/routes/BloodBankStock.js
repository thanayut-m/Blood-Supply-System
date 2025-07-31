import express from "express";
import {
  getBloodBankStock,
  getBloodTypeOption,
  getContaminatedBloodBags,
  getDeliveredBloodBags,
  getPendingBloodBags,
  getReadyBloodBags,
  getReservedBloodBags,
  getTotalBlood,
} from "../controllers/BloodBankStockController.js";
import { isLogin } from "../middlewares/AuthMiddleware.js";

export const router = express.Router();

router.get("/getBloodBankStock", isLogin, getBloodBankStock);
router.get("/getBloodTypeOption", isLogin, getBloodTypeOption);
router.get("/getTotalBlood", isLogin, getTotalBlood);
router.get("/getReadyBloodBags", isLogin, getReadyBloodBags);
router.get("/getPendingBloodBags", isLogin, getPendingBloodBags);
router.get("/getDeliveredBloodBags", isLogin, getDeliveredBloodBags);
router.get("/getContaminatedBloodBags", isLogin, getContaminatedBloodBags);
router.get("/getReservedBloodBags", isLogin, getReservedBloodBags);
