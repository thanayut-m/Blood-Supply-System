import { query_db } from "../services/connectDb .js";
import { createError } from "./../utils/createError.js";
import bcrypt from "bcrypt";

export const resetPassword = async (req, res, next) => {
  try {
    const { lis_password, new_password, username } = req.body;

    if (!lis_password || !new_password || !username) {
      throw createError(400, "ข้อมูลไม่ครบ");
    }

    const CheckUsername = await query_db(
      "select username,mobile_logins from staff where username = ?",
      [username]
    );

    if (CheckUsername.length === 0) {
      throw createError(404, "ไม่พบชื่อผู้ใช้");
    }

    if (CheckUsername[0].mobile_logins !== lis_password) {
      throw createError(404, "รหัสผ่านไม่ตรงกัน LIS");
    }

    const hashPassword = await bcrypt.hash(new_password, 10);

    const result = await query_db(
      "UPDATE staff SET web_password = ? WHERE username = ?",
      [hashPassword, username]
    );

    res.status(200).json({ success: true, result: result });
  } catch (error) {
    next(error);
  }
};
