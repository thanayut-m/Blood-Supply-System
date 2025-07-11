import { createError } from "../utils/createError.js";
import jwt from "jsonwebtoken";

export const isLogin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw createError(401, "No token, authorization denied");
    }

    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.staff_id = decode.user || decode;
    next();
  } catch (error) {
    next(createError(401, "Token is not valid"));
  }
};
