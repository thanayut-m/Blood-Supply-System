import { useEffect } from "react";
import { AuthLayout } from "../../../../layouts/AuthLayout"
import { MobileResetPasswordForm } from "../../components/Mobile/MobileResetPasswordForm"
import { useForgetPassword } from "../../hook/useForgetPassword";

export const MobileResetPasswordPage = () => {
    useEffect(() => {
        document.title = "รีเซ็ตรหัสผ่าน || Logins Medical";
    }, []);

    const { handleForgetPassword } = useForgetPassword();

    return (
        <AuthLayout>
            <MobileResetPasswordForm onClick={handleForgetPassword} />
        </AuthLayout>
    )
}