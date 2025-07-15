import { useMediaQuery } from "react-responsive";
import { Routes, Route } from "react-router";
import { useCurrentUser } from "../features/Auth/hook/useCurrentUser";

//mobile
import { MobileResetPasswordPage } from "../features/Auth/pages/Mobile/MobileResetPasswordPage";
import { MobileSignInPage } from "../features/Auth/pages/Mobile/MobileSignInPage";
import { MobileBloodBankReaction } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankReaction";
import { MobileGiveBloodListPage } from "../features/giveBlood/page/Mobile/MobileGiveBloodListPage";
import { MobileBloodBankGiveDetail } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankGiveDetail";
import { MobileBloodGiveDetailPage } from "../features/giveBlood/page/Mobile/MobileBloodGiveDetailPage";

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
                        "Not Desktop"}
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
                    path="/BloodBankGiveDetail"
                    element={isMobile &&
                        <MobileBloodBankGiveDetail
                        />
                    }
                />
                <Route
                    path="/BloodBankReaction"
                    element={isMobile &&
                        <MobileBloodBankReaction />
                    }
                />
                {/* <Route path="/private/*" element={<PrivateRouters />} /> */}
            </Routes>
        </div >
    )
}