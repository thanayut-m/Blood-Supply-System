import { useMediaQuery } from "react-responsive";
import { Routes, Route, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Loading } from './../components/Loading';

//mobile
import { MobileSignIn } from "../auth/mobile/MobileSignIn";
import { MobileSignup } from "../auth/mobile/MobileSignup";

//Desktop
import { DesktopSignIn } from "../auth/desktop/DesktopSignIn";
import { DesktopSignup } from "../auth/desktop/DesktopSignup";


export const AppRouters = () => {
    const isMobile = useMediaQuery({ maxWidth: 430 })
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeOut = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timeOut);
    }, [location]);

    return (
        <div>
            {loading &&
                <Loading loading={loading} />
            }
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

                {/* <Route path="/private/*" element={<PrivateRouters />} /> */}
            </Routes>
        </div >
    )
}