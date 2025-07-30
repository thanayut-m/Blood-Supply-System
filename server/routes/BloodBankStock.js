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

export const router = express.Router();

router.get("/getBloodBankStock", getBloodBankStock);
router.get("/getBloodTypeOption", getBloodTypeOption);
router.get("/getTotalBlood", getTotalBlood);
router.get("/getReadyBloodBags", getReadyBloodBags);
router.get("/getPendingBloodBags", getPendingBloodBags);
router.get("/getDeliveredBloodBags", getDeliveredBloodBags);
router.get("/getContaminatedBloodBags", getContaminatedBloodBags);
router.get("/getReservedBloodBags", getReservedBloodBags);
