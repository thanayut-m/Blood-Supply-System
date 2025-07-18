import { MobilePrivateLayout } from "../../../../layouts/MobilePrivateLayout"
import { BloodBagDetails } from "../../components/bloodReaction/Mobile/BloodBagDetails"
import { useBloodReaction } from "../../hook/useBloodReaction"
import { ReactionStatusRadio } from "../../components/bloodReaction/Mobile/ReactionStatusRadio"

export const MobileBloodReactionPage = () => {
    const { data, loading } = useBloodReaction()

    if (loading) return <p>กำลังโหลด...</p>;
    return (
        <MobilePrivateLayout>
            {data && (
                <BloodBagDetails
                    data={{
                        bloodBag: data?.data.bloodBag,
                        crossMatch: data?.data.crossMatch
                    }}
                />
            )}
            <div>
                <label className="text-[#B5B5B5] text-base">บันทึกปฏิกิริยาหลังรับเลือด</label>
                {data && (
                    <ReactionStatusRadio data={data?.data.reaction} />
                )}
            </div>
        </MobilePrivateLayout>
    )
}