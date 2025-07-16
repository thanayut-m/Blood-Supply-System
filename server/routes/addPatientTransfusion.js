import express from "express";
import {
  getAllPatientTransfusions,
  getAllPatientTransfusionsInfo,
  UpdateGiveBlood,
  updatePatientTransfusions,
} from "../controllers/addPatientTransfusionController.js";
import { isLogin } from "./../middlewares/AuthMiddleware.js";

export const router = express.Router();

router.get(
  "/getAllPatientTransfusionsInfo",
  isLogin,
  getAllPatientTransfusionsInfo
);

router.get("/getAllPatientTransfusions", isLogin, getAllPatientTransfusions);
router.put("/updatePatientTransfusions", isLogin, updatePatientTransfusions);
router.put("/updatePayBlood", isLogin, UpdateGiveBlood);
