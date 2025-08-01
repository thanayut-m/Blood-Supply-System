import { DesktopPrivateLayout } from "../../../../layouts/DesktopPrivateLayout"
import { BloodDonationHistory } from "../../components/BloodDonationHistory";

const BloodDonationHistoryPage = () => {

    return (
        <DesktopPrivateLayout>
            <div className="bg-white rounded-2xl px-4 py-2">
                <BloodDonationHistory />
            </div>
        </DesktopPrivateLayout>

    )
}
export default BloodDonationHistoryPage