import { AuthLayout } from "../../../../layouts/AuthLayout"
import { MobileSignInForm } from "../../components/Mobile/MobileSignInForm"

export const MobileSignInPage = () => {
    return (
        <AuthLayout>
            <MobileSignInForm />
        </AuthLayout>
    )
}