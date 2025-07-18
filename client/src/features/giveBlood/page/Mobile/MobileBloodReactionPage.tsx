import { MobilePrivateLayout } from "../../../../layouts/MobilePrivateLayout"
import { BloodBagDetails } from "../../components/bloodReaction/Mobile/BloodBagDetails"
import { useBloodReaction } from "../../hook/useBloodReaction"
import { ReactionStatusRadio } from "../../components/bloodReaction/Mobile/ReactionStatusRadio"
import { Autocompletes } from "../../../../components/MUI/Autocompletes"
import { useForm } from "react-hook-form"
import { useViolenceOptions } from "../../hook/useViolenceOptions"

export const MobileBloodReactionPage = () => {
    const { control } = useForm()
    const { data, loading } = useBloodReaction()
    const { violenceOptions } = useViolenceOptions()

    if (loading) return <p>กำลังโหลด...</p>;

    return (
        <MobilePrivateLayout>
            <div className="flex flex-col gap-2">
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
                <div className="flex">
                    <Autocompletes
                        options={violenceOptions}
                        control={control}
                        name="symptom_severity"
                        label="ความรุนแรง"
                    />
                </div>
            </div>
        </MobilePrivateLayout>
    )
}