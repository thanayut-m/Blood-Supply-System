import express from "express";
import { getAllPatientTransfusions } from "../controllers/addPatientTransfusionController.js";
import { isLogin } from "./../middlewares/AuthMiddleware.js";

export const router = express.Router();

router.get("/getAllPatientTransfusions", isLogin, getAllPatientTransfusions);
