import { useLocation } from "react-router";

export const MobileNavbar = () => {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case "/BloodBankGiveList":
                return "ให้เลือดผู้ป่วย";
            case "/search":
                return "ค้นหา";
            default:
                return "Blood Bank";
        }
    };
    return (
        <div className="bg-[#0D47A1] shadow-xl text-white">
            <div className="flex justify-center items-center py-3">
                <span className="text-xl font-semibold">{getTitle()}</span>
            </div>
        </div>

    )
}