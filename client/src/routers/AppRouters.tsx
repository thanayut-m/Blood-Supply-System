import { useMediaQuery } from "react-responsive";
import { Routes, Route } from "react-router";
import { useCurrentUser } from "../features/Auth/hook/useCurrentUser";

//mobile
import { MobileResetPasswordPage } from "../features/Auth/pages/Mobile/MobileResetPasswordPage";
import { MobileSignInPage } from "../features/Auth/pages/Mobile/MobileSignInPage";
import { MobileBloodBankGiveList } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankGiveList";
import { MobileBloodBankGiveDetail } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankGiveDetail";
import { MobileBloodBankReaction } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankReaction";
import { MobileGiveBloodListPage } from "../features/giveBlood/page/Mobile/MobileGiveBloodListPage";

export const AppRouters = () => {
    const isMobile = useMediaQuery({ maxWidth: 430 })
    const { user } = useCurrentUser();
    console.log(user)

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
                    path="/BloodBankGiveList"
                    element={isMobile ?
                        <MobileBloodBankGiveList />
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

                <Route
                    path="/ResetPassword"
                    element={isMobile &&
                        <MobileResetPasswordPage />
                    }
                />
                <Route
                    path="/giveBloodList"
                    element={isMobile &&
                        <MobileGiveBloodListPage />
                    }
                />

                {/* <Route path="/private/*" element={<PrivateRouters />} /> */}
            </Routes>
        </div >
    )
}