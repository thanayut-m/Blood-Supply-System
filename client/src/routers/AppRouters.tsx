import { useMediaQuery } from "react-responsive";
import { Routes, Route } from "react-router";

//mobile
import { MobileSignIn } from "../auth/mobile/MobileSignIn";
import { MobileSignup } from "../auth/mobile/MobileSignup";
import { MobileBloodBankGiveList } from "../pages/BloodBankGiveList/Mobile/MobileBloodBankGiveList";
import { Search } from "../pages/search/Mobile/search";

//Desktop
import { DesktopSignIn } from "../auth/desktop/DesktopSignIn";
import { DesktopSignup } from "../auth/desktop/DesktopSignup";
import { DesktopBloodBankGiveList } from "../pages/BloodBankGiveList/Desktop/DesktopBloodBankGiveList";




export const AppRouters = () => {
    const isMobile = useMediaQuery({ maxWidth: 430 })
    // const location = useLocation();
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     const timeOut = setTimeout(() => {
    //         setLoading(false);
    //     }, 300);
    //     return () => clearTimeout(timeOut);
    // }, [location]);

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
                        <Search />
                    }
                />
                {/* <Route path="/private/*" element={<PrivateRouters />} /> */}
            </Routes>
        </div >
    )
}