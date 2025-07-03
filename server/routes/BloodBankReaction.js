import express from "express";
import { createBloodBankReaction } from "../controllers/BloodBankReactionController.js";

export const router = express.Router();

router.get("/createBloodBankReaction", createBloodBankReaction);
