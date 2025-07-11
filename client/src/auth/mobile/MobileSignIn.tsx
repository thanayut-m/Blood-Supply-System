import { Buttons } from "../../components/Buttons"
import { FormInput } from "../../components/inputs/FormInput"
import { AuthLayout } from "../../layouts/AuthLayout"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaSignIn } from "../../utils/Schema"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { signIn } from "../../functions/Auth.js"

export const MobileSignIn = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schemaSignIn)
    });

    const { errors, isSubmitting } = formState;

    useEffect(() => {
        document.title = "เข้าสู่ระบบ || Logins Medical"
    }, [])

    const onSaveSignIn = async (data: object) => {
        signIn(data, navigate)
    }

    return (
        <AuthLayout >
            <form
                className="flex flex-col items-center gap-6 w-full max-w-md">
                <div className="text-3xl font-bold">เข้าสู่ระบบ</div>
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
                        name="password"
                        errors={errors}
                        type="password"
                        label="รหัสผ่าน"
                        placeholder="Password..."
                    />
                    <div className="mt-4">
                        <Buttons
                            isSubmitting={isSubmitting}
                            onClick={handleSubmit(onSaveSignIn)}
                            className={`${isSubmitting ? "bg-gray-400" : "bg-blue-500"} rounded-2xl py-2 text-white`}
                        >
                            เข้าสู่ระบบ
                        </Buttons>
                    </div>
                </div>
            </form>
        </AuthLayout >
    )
}