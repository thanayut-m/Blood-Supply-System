import { useMediaQuery } from "react-responsive";
import { Routes, Route, Navigate } from "react-router";

//mobile
import { MobileResetPasswordPage } from "../features/Auth/pages/Mobile/MobileResetPasswordPage";
import { MobileSignInPage } from "../features/Auth/pages/Mobile/MobileSignInPage";
import { MobileGiveBloodListPage } from "../features/giveBlood/page/Mobile/MobileGiveBloodListPage";
import { MobileBloodGiveDetailPage } from "../features/giveBlood/page/Mobile/MobileBloodGiveDetailPage";
import { MobileBloodReactionPage } from "../features/giveBlood/page/Mobile/MobileBloodReactionPage";
import { DesktopSignInPage } from "../features/Auth/pages/Desktop/DesktopSignInPage";
import { DonorList } from "../features/donor/page/Modile/DonorList";
import { BloodBankStockList } from "../features/BloodBankStock/page/Mobile/BloodBankStockList";
import { DesktopSignUpPage } from "../features/Auth/pages/Desktop/DesktopSignUpPage";
import { useCurrentUser } from "../features/Auth/hook/useCurrentUser";

export const AppRouters = () => {
    const isMobile = useMediaQuery({ maxWidth: 430 })
    const { user } = useCurrentUser()

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={isMobile ?
                        <MobileSignInPage />
                        :
                        <DesktopSignInPage />}
                />
                <Route
                    path="/ResetPassword"
                    element={isMobile &&
                        <MobileResetPasswordPage />
                    }
                />
                <Route
                    path="/giveBloodList"
                    element={isMobile ?
                        <MobileGiveBloodListPage />
                        :
                        "Not Desktop"
                    }
                />
                <Route
                    path="/bloodGiveDetail"
                    element={isMobile ?
                        <MobileBloodGiveDetailPage />
                        :
                        "Not Desktop"
                    }
                />
                <Route
                    path="/bloodReaction"
                    element={isMobile ?
                        <MobileBloodReactionPage />
                        :
                        "Not Desktop"
                    }
                />
                <Route
                    path="/DonorList"
                    element={isMobile ?
                        "Not Mobile"
                        :
                        <DonorList />
                    }
                />
                <Route
                    path="/BloodBankStock"
                    element={isMobile ?
                        "Not Mobile"
                        :
                        <BloodBankStockList />
                    }
                />

                <Route
                    path="/Setting/manageUser"
                    element={isMobile ?
                        "Not Mobile"
                        :
                        <DesktopSignUpPage />
                    }
                />

                {/* <Route path="/private/*" element={<PrivateRouters />} /> */}
            </Routes>
        </div >
    )
}