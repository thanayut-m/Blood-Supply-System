import express from "express";
import {
  getAllPatientTransfusions,
  getAllPatientTransfusionsInfo,
} from "../controllers/addPatientTransfusionController.js";
import { isLogin } from "./../middlewares/AuthMiddleware.js";

export const router = express.Router();

router.get(
  "/getAllPatientTransfusionsInfo",
  isLogin,
  getAllPatientTransfusionsInfo
);

router.get("/getAllPatientTransfusions", getAllPatientTransfusions);
