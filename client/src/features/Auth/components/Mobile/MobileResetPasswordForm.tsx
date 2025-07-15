import { useForm } from "react-hook-form"
import { Buttons } from "../../../../components/Buttons"
import { FormInput } from "../../../../components/inputs/FormInput"
import type { ResetPasswordPayload } from "../../types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaResetPassword } from "../../schema/ResetPasswordSchema";
import { resetPassword } from "../../services/authApi";
import { useNavigate } from "react-router";

export const MobileResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ResetPasswordPayload>({
    resolver: zodResolver(schemaResetPassword)
  });
  const navigate = useNavigate();

  const handleResetPassword = async (data: ResetPasswordPayload) => {
    await resetPassword(data, navigate)
  }

  return (
    <form
      onClick={handleSubmit(handleResetPassword)}
      className="flex flex-col items-center gap-6 w-full max-w-md">
      <div className="text-3xl font-bold">resetPassword</div>
      <div className="flex flex-col justify-center w-full">
        <FormInput
          register={register}
          name="username"
          errors={errors}
          type="text"
          label="บัญชีผู้ใช้"
          placeholder="Username..."
        />
        <FormInput
          register={register}
          name="lis_password"
          errors={errors}
          type="password"
          label="รหัสผ่าน เข้าสู่ระบบ LIS"
          placeholder="Password..."
        />
        <FormInput
          register={register}
          name="new_password"
          errors={errors}
          type="password"
          label="รหัสผ่านใหม่"
          placeholder="Password..."
        />
        <div className="mt-4">
          <Buttons
            isSubmitting={isSubmitting}
            className={`${isSubmitting ? "bg-gray-400" : "bg-blue-500"} rounded-2xl py-2 text-white`}
          >
            บันทึก
          </Buttons>
        </div>
      </div>
    </form>
  )
}