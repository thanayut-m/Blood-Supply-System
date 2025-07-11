import { useLocation } from "react-router"

export const MobileNavbar2 = () => {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case "/BloodBankReaction":
                return "บันทึกข้อมูลปฏิกิริยาหลังรับเลือด";
            case "/BloodBankGiveDetail":
                return "บันทึกการให้โลหิต";
            case "/BloodBankGiveList":
                return "ให้เลือดผู้ป่วย";
            default:
                return "Blood Bank";
        }
    }

    return (
        <div
            className="pt-7 text-center text-xl text-white font-prompt ">
            {getTitle()}
        </div>

    )
}