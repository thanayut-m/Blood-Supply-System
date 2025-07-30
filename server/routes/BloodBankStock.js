import express from "express";
import {
  getBloodBankStock,
  getBloodTypeOption,
  getTotalBlood,
} from "../controllers/BloodBankStockController.js";

export const router = express.Router();

router.get("/getBloodBankStock", getBloodBankStock);

router.get("/getBloodTypeOption", getBloodTypeOption);

router.get("/getTotalBlood", getTotalBlood);

