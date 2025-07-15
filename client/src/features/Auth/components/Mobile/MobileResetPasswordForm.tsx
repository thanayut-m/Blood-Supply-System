import { useForm } from "react-hook-form"
import type { ForgetPasswordPayload } from "../../types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaResetPassword } from "../../schema/ResetPasswordSchema";
import { FormInput } from "../../../../components/inputs/FormInput";
import { Buttons } from "../../../../components/Buttons";


export const MobileResetPasswordForm = (
  { onClick }: { onClick: (data: ForgetPasswordPayload) => void }
) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ForgetPasswordPayload>({
    resolver: zodResolver(schemaResetPassword)
  });


  return (
    <form
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
            onClick={handleSubmit(onClick)}
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