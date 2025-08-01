import { useMediaQuery } from "react-responsive";
import { Routes, Route } from "react-router";

//mobile
import { MobileResetPasswordPage } from "../features/Auth/pages/Mobile/MobileResetPasswordPage";
import { MobileSignInPage } from "../features/Auth/pages/Mobile/MobileSignInPage";
import { MobileGiveBloodListPage } from "../features/giveBlood/page/Mobile/MobileGiveBloodListPage";
import { MobileBloodGiveDetailPage } from "../features/giveBlood/page/Mobile/MobileBloodGiveDetailPage";
import { MobileBloodReactionPage } from "../features/giveBlood/page/Mobile/MobileBloodReactionPage";
import { DesktopSignInPage } from "../features/Auth/pages/Desktop/DesktopSignInPage";
import { DesktopSignUpPage } from "../features/Auth/pages/Desktop/DesktopSignUpPage";
import { DonorListPage } from "../features/donor/page/Modile/DonorListPage";
import { BloodBankStockListPage } from "../features/BloodBankStock/page/Mobile/BloodBankStockListPage";
import BloodDonationHistoryPage from "../features/BloodBankStock/page/Desktop/BloodDonationHistoryPage";

export const AppRouters = () => {
    const isMobile = useMediaQuery({ maxWidth: 430 })

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
                        <DonorListPage />
                    }
                />
                <Route
                    path="/BloodBankStock"
                    element={isMobile ?
                        "Not Mobile"
                        :
                        <BloodBankStockListPage />
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

                <Route
                    path="/BloodDonationHistory"
                    element={isMobile ?
                        "Not Mobile"
                        :
                        <BloodDonationHistoryPage />
                    }
                />

                {/* <Route path="/private/*" element={<PrivateRouters />} /> */}
            </Routes>
        </div >
    )
}