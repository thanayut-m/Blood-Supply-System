import { z } from "zod";

export const schemaSignIn = z.object({
  username: z.string().min(1, { message: "กรุณากรอกชื่อผู้ใช้" }),
  password: z.string().min(1, { message: "กรุณากรอกรหัสผ่าน" }),
});
