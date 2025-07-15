import { z } from "zod";

export const schemaResetPassword = z.object({
  username: z.string().min(1, { message: "กรุณากรอกชื่อผู้ใช้" }),
  lis_password: z.string().min(1, { message: "กรุณากรอกรหัสผ่าน" }),
  new_password: z.string().min(1, { message: "กรุณากรอกรหัสผ่าน" }),
});
