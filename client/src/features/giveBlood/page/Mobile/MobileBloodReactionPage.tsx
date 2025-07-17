import { MobilePrivateLayout } from "../../../../layouts/MobilePrivateLayout"
import { BloodBagDetails } from "../../components/bloodReaction/Mobile/BloodBagDetails"
import { useBloodReaction } from "../../hook/useBloodReaction"

export const MobileBloodReactionPage = () => {
    const { data, loading } = useBloodReaction()

    if (loading) return <p>กำลังโหลด...</p>;
    return (
        <MobilePrivateLayout>
            <BloodBagDetails
                data={{
                    bloodBag: data?.data.bloodBag,
                    crossMatch: data?.data.crossMatch
                }} />
        </MobilePrivateLayout>
    )
}