import { useLocation } from "react-router"

export const MobileNavbar = () => {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case "/bloodReaction":
                return "บันทึกข้อมูลปฏิกิริยาหลังรับเลือด";
            case "/bloodGiveDetail":
                return "บันทึกการให้โลหิต";
            case "/giveBloodList":
                return "ให้เลือดผู้ป่วย";
            default:
                return "Blood Bank";
        }
    }

    return (
        <div
            className="pt-7 pb-2 text-center text-xl text-white font-prompt ">
            {getTitle()}
        </div>

    )
}