import express from "express";
import { getDonorList } from "../controllers/DonorController.js";

export const router = express.Router();

router.get("/getDonorList", getDonorList);
