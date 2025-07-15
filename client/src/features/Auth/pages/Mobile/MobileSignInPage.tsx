import { useEffect } from "react";
import { AuthLayout } from "../../../../layouts/AuthLayout"
import { MobileSignInForm } from "../../components/Mobile/MobileSignInForm"
import { useSignIn } from "../../hook/useSignIn";

export const MobileSignInPage = () => {
    useEffect(() => {
        document.title = "เข้าสู่ระบบ || Logins Medical";
    }, []);

    const { handleSignIn } = useSignIn();

    return (
        <AuthLayout>
            <MobileSignInForm onClick={handleSignIn} />
        </AuthLayout>
    )
}