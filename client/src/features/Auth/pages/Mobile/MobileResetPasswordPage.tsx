import { AuthLayout } from "../../../../layouts/AuthLayout"
import { MobileResetPasswordForm } from "../../components/Mobile/MobileResetPasswordForm"

export const MobileResetPasswordPage = () => {
    return (
        <AuthLayout>
            <MobileResetPasswordForm />
        </AuthLayout>
    )
}