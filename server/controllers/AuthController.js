import { query_db } from "../services/connectDb .js";
import { createError } from "./../utils/createError.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { promisify } from "util";
import jwt from "jsonwebtoken";
dotenv.config();

export const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw createError(400, "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
    }

    const users = await query_db(
      "SELECT staff_id, username, bb_give, web_password FROM staff WHERE username = ?",
      [username]
    );

    if (users.length === 0) {
      throw createError(404, "ไม่พบชื่อผู้ใช้งาน");
    }

    const user = users[0];

    if (user.bb_give !== "Y") {
      throw createError(403, "ไม่มีสิทธิ์เข้าใช้งานระบบ");
    }

    const isMatch = await bcrypt.compare(password, user.web_password);

    if (!isMatch) {
      throw createError(401, "รหัสผ่านไม่ถูกต้อง");
    }

    const token = await promisify(jwt.sign)(
      { user: { id: user.staff_id } },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "เข้าสู่ระบบสำเร็จ",
      user: {
        username: user.username,
        bb_give: user.bb_give,
      },
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

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

export const staffInfo = async (req, res, next) => {
  try {
    const result = await query_db(
      `SELECT staff_id,staff_name FROM staff WHERE bb_give = ?`,
      ["Y"]
    );

    if (!result || result.length === 0) {
      throw createError(404, "ไม่พบข้อมูลเจ้าหน้าที่");
    }

    res.status(200).json({
      success: true,
      data: result.map((staff) => ({
        staffId: staff.staff_id,
        staffName: staff.staff_name,
      })),
    });
  } catch (error) {
    next(error);
  }
};

export const currentUser = async (req, res, next) => {
  try {
    const result = await query_db(
      "SELECT staff_id,staff_name FROM staff WHERE staff_id = ?",
      [req.staff_id.id]
    );

    if (result.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // console.log(result[0].staff_name);
    res.status(200).json({
      success: true,
      staff: result[0].staff_name,
      staffId: result[0].staff_id,
    });
  } catch (error) {
    next(error);
  }
};
