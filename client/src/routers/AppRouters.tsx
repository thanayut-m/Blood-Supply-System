import { useMediaQuery } from "react-responsive";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { currentUser } from './../features/Auth/services/authApi';

//mobile
import { MobileResetPasswordPage } from "../features/Auth/pages/Mobile/MobileResetPasswordPage";
import { MobileSignInPage } from "../features/Auth/pages/Mobile/MobileSignInPage";
import { MobileBloodBankGiveList } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankGiveList";
import { MobileBloodBankGiveDetail } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankGiveDetail";
import { MobileBloodBankReaction } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankReaction";


//Desktop
import { DesktopSignIn } from "../auth/desktop/DesktopSignIn";
import { DesktopBloodBankGiveList } from "../pages/BloodBankGiveList/Desktop/DesktopBloodBankGiveList";
import type { StaffData } from "../features/Auth/types/auth.types";


export const AppRouters = () => {
    const isMobile = useMediaQuery({ maxWidth: 430 })
    const [currentStaff, setCurrentStaff] = useState<StaffData | null>(null);

    const fetchUser = async () => {
        try {
            const idToken = localStorage.getItem(import.meta.env.VITE_SET_TOKEN)
            if (!idToken) {
                console.warn("ไม่พบ token ใน localStorage");
                return;
            }

            const staff = await currentUser();
            setCurrentStaff(staff)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={isMobile ?
                        <MobileSignInPage />
                        :
                        <DesktopSignIn />}
                />

                <Route
                    path="/BloodBankGiveList"
                    element={isMobile ?
                        <MobileBloodBankGiveList />
                        :
                        <DesktopBloodBankGiveList />
                    }
                />

                <Route
                    path="/BloodBankGiveDetail"
                    element={isMobile &&
                        <MobileBloodBankGiveDetail
                            currentStaff={currentStaff}
                        />
                    }
                />

                <Route
                    path="/BloodBankReaction"
                    element={isMobile &&
                        <MobileBloodBankReaction />
                    }
                />

                <Route
                    path="/ResetPassword"
                    element={isMobile &&
                        <MobileResetPasswordPage />
                    }
                />

                {/* <Route path="/private/*" element={<PrivateRouters />} /> */}
            </Routes>
        </div >
    )
}