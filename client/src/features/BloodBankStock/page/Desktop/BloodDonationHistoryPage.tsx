import { useEffect } from "react";
import { DesktopPrivateLayout } from "../../../../layouts/DesktopPrivateLayout"
import { BloodDonationHistory } from "../../components/BloodDonationHistory";

const BloodDonationHistoryPage = () => {
    useEffect(() => {
        document.title = "ประวัติการจ่ายเลือด || Logins Medical";
    }, [])
    return (
        <DesktopPrivateLayout>
            <div className="bg-white rounded-2xl px-4 py-2">
                <BloodDonationHistory />
            </div>
        </DesktopPrivateLayout>

    )
}
export default BloodDonationHistoryPage