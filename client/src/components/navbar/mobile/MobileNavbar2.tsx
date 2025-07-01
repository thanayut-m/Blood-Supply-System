import { useLocation } from "react-router"

export const MobileNavbar2 = () => {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case "/MobileBloodBankReaction":
                return "บันทึกข้อมูลปฏิกิริยาหลังรับเลือด";
            default:
                return "Blood Bank";
        }
    }

    return (
        <div
            className="py-4 text-center text-xl text-white font-prompt ">
            {getTitle()}
        </div>

    )
}