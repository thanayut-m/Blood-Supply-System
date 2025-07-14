import { useMediaQuery } from "react-responsive";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

//mobile
import { MobileSignIn } from "../auth/mobile/MobileSignIn";
import { MobileSignup } from "../auth/mobile/MobileSignup";
import { MobileBloodBankGiveList } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankGiveList";
import { MobileSearch } from "../pages/search/Mobile/MobileSearch";
import { MobileBloodBankGiveDetail } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankGiveDetail";
import { MobileBloodBankReaction } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankReaction";
import { MobileResetPassword } from "../auth/mobile/MobileResetPassword";


//Desktop
import { DesktopSignIn } from "../auth/desktop/DesktopSignIn";
import { DesktopSignup } from "../auth/desktop/DesktopSignup";
import { DesktopBloodBankGiveList } from "../pages/BloodBankGiveList/Desktop/DesktopBloodBankGiveList";
import { currentUser } from "../functions/Auth";

export const AppRouters = () => {
    const isMobile = useMediaQuery({ maxWidth: 430 })
    const [currentStaff, setCurrentStaff] = useState<{ staffId: number; staff: string } | null>(null);

    // const location = useLocation();
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     const timeOut = setTimeout(() => {
    //         setLoading(false);
    //     }, 300);
    //     return () => clearTimeout(timeOut);
    // }, [location]);

    const fetchUser = async () => {

        const idToken = localStorage.getItem(import.meta.env.VITE_SET_TOKEN)
        // console.log(isToken)

        if (!idToken) {
            console.warn("ไม่พบ token ใน localStorage");
            return;
        }
        try {
            const staff = await currentUser();
            // const staff = {
            //     staffId: result.staffId,
            //     staffName: result.staff
            // }
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
            {/* {loading &&
                <Loading loading={loading} />
            } */}
            <Routes>
                <Route
                    path="/"
                    element={isMobile ?
                        <MobileSignIn />
                        :
                        <DesktopSignIn />}
                />
                <Route
                    path="/signup"
                    element={isMobile ?
                        <MobileSignup />
                        :
                        <DesktopSignup />}
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
                    path="/search"
                    element={isMobile &&
                        <MobileSearch />
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
                        <MobileResetPassword />
                    }
                />


                {/* <Route path="/private/*" element={<PrivateRouters />} /> */}
            </Routes>
        </div >
    )
}