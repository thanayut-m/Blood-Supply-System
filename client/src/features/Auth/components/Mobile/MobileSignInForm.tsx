import { useForm } from "react-hook-form"
import { Buttons } from "../../../../components/Buttons"
import { FormInput } from "../../../../components/inputs/FormInput"
import type { SignInPayload } from "../../types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaSignIn } from "../../schema/signInSchema";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { SignIn } from "../../services/authApi";

export const MobileSignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SignInPayload>({
        resolver: zodResolver(schemaSignIn)
    });
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "เข้าสู่ระบบ || Logins Medical";
    }, []);

    const handleSignIn = async (data: SignInPayload) => {
        await SignIn(data, navigate)
    }

    return (
        <form
            onClick={handleSubmit(handleSignIn)}
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
                        className={`${isSubmitting ? "bg-gray-400" : "bg-blue-500"} rounded-2xl py-2 text-white`}
                    >
                        เข้าสู่ระบบ
                    </Buttons>
                </div>
            </div>
        </form>
    )
}