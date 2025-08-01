import { useEffect } from "react";
import { AuthLayout } from "../../../../layouts/AuthLayout"
import { MobileResetPasswordForm } from "../../components/Mobile/MobileResetPasswordForm"

export const MobileResetPasswordPage = () => {
    useEffect(() => {
        document.title = "รีเซ็ตรหัสผ่าน || Logins Medical";
    }, []);


    return (
        <AuthLayout>
            <MobileResetPasswordForm />
        </AuthLayout>
    )
}