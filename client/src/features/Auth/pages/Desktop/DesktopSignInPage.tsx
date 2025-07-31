import { useForm } from "react-hook-form"
import { FormInput } from "../../../../components/MUI/Inputs/FormInput"
import { DesktopAuth } from "../../../../layouts/DesktopAuth"
import { Buttons } from "../../../../components/Buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaSignIn } from "../../schema/signInSchema";
import { useEffect } from "react";
import { useSignIn } from "../../hook/useSignIn";

export const DesktopSignInPage = () => {
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schemaSignIn)
    });
    const { handleSignIn } = useSignIn()

    const { isSubmitting } = formState;

    useEffect(() => {
        document.title = "เข้าสู่ระบบ";
    }, [])


    return (
        <DesktopAuth>
            <div className="flex flex-col items-center justify-center mb-4">
                <p className="text-2xl">เข้าสู่ระบบ</p>
            </div>
            <form
                onSubmit={handleSubmit(handleSignIn)}
                className="flex flex-col gap-3"
            >
                <FormInput
                    register={register}
                    name="username"
                    label="ชื่อผู้ใช้"
                    variant="outlined"
                    size="small"
                />
                <FormInput
                    register={register}
                    name="password"
                    label="รหัสผ่าน"
                    variant="outlined"
                    size="small"
                    type="password"
                />
                <Buttons
                    isSubmitting={isSubmitting}
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-500 p-3 rounded-2xl"
                >
                    เข้าสู่ระบบ
                </Buttons>
            </form>
        </DesktopAuth>
    )
}