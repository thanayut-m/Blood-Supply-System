import express from "express";
import { resetPassword } from "../controllers/AuthController.js";

export const router = express.Router();

router.put("/resetPassword", resetPassword);
