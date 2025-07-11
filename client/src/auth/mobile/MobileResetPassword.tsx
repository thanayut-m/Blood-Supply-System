import { useForm } from "react-hook-form"
import { FormInput } from "../../components/inputs/FormInput"
import { AuthLayout } from "../../layouts/AuthLayout"
import { Buttons } from "../../components/Buttons"
import { useNavigate } from "react-router"
import { ResetPassword } from "../../functions/Auth"


export const MobileResetPassword = () => {
    const { register, formState, handleSubmit } = useForm({})
    const { errors, isSubmitting } = formState;

    const navigate = useNavigate();

    const onSaveResetPassword = (data: object) => {
        try {
            ResetPassword(data, navigate);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthLayout >
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
                            isSubmitting={isSubmitting}
                            onClick={handleSubmit(onSaveResetPassword)}
                            className={`${isSubmitting ? "bg-gray-400" : "bg-blue-500"} rounded-2xl py-2 text-white`}
                        >
                            บันทึก
                        </Buttons>
                    </div>
                </div>
            </form>
        </AuthLayout >
    )
}