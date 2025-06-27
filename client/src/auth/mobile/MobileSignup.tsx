import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../../components/inputs/FormInput"
import { schemaSignIn } from "../../utils/Schema";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Buttons } from "../../components/Buttons";
import { AuthLayout } from "../../layouts/AuthLayout";

export const MobileSignup = () => {
    const { register, formState } = useForm({
        resolver: zodResolver(schemaSignIn)
    });

    const { errors, isSubmitting } = formState;

    useEffect(() => {
        document.title = "สมัครสมาชิก || Logins Medical"
    }, [])
    return (
        <AuthLayout>
            <form
                className="flex flex-col items-center gap-6 w-full max-w-md">
                <div className="text-3xl font-bold">สมัครสมาชิก</div>
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
                    <FormInput
                        register={register}
                        name="password"
                        errors={errors}
                        type="password"
                        label="ยืนยันรหัสผ่าน"
                        placeholder="Password..."
                    />
                    <div className="mt-4">
                        <Buttons
                            variant="primary"
                            isSubmitting={isSubmitting}
                        // onClick={handleSubmit(onSaveSignUp)}
                        >
                            เข้าสู่ระบบ
                        </Buttons>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}