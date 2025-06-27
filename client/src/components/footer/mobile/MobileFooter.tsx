import { Link } from "react-router"

export const MobileFooter = () => {
    return (
        <footer className="bg-[#0D47A1] text-white py-3 px-2 shadow-inner">
            <nav className="grid grid-cols-5 text-center text-xl gap-1">
                <Link to={"/BloodBankGiveList"} className="flex flex-col items-center justify-center hover:text-yellow-300 transition">
                    <span>📊</span>
                    <span className="text-xs">รายงาน</span>
                </Link>
                <Link to={"/BloodBankGiveList"} className="flex flex-col items-center justify-center hover:text-yellow-300 transition">
                    <span>📝</span>
                    <span className="text-xs">ข้อมูลการจอง</span>
                </Link>
                <Link to={"/BloodBankGiveList"} className="flex flex-col items-center justify-center hover:text-yellow-300 transition">
                    <span>🩸</span>
                    <span className="text-xs">ให้เลือดผู้ป่วย</span>
                </Link>
                <Link to={"/search"} className="flex flex-col items-center justify-center hover:text-yellow-300 transition">
                    <span>🔎</span>
                    <span className="text-xs">ค้นหา</span>
                </Link>
                <Link to={"/BloodBankGiveList"} className="flex flex-col items-center justify-center hover:text-yellow-300 transition">
                    <span>🧑‍⚕️</span>
                    <span className="text-xs">บัญชีผู้ใช้</span>
                </Link>
            </nav>
        </footer>
    )
}