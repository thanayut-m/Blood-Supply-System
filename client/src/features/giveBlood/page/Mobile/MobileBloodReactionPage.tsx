import { MobilePrivateLayout } from "../../../../layouts/MobilePrivateLayout"
import { BloodBagDetails } from "../../components/bloodReaction/Mobile/BloodBagDetails"
import { useBloodReaction } from "../../hook/useBloodReaction"
import { ReactionStatusRadio } from "../../components/bloodReaction/Mobile/ReactionStatusRadio"
import { Autocompletes } from "../../../../components/MUI/Autocompletes"
import { useForm } from "react-hook-form"
import { useViolenceOptions } from "../../hook/useViolenceOptions"
import { Inputs } from "../../../../components/MUI/Inputs/Inputs"
import dayjs from "dayjs"
import { SymptomCheckboxGroup } from "../../components/bloodReaction/Mobile/SymptomCheckboxGroup"

export const MobileBloodReactionPage = () => {
    const { control, register } = useForm()
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
                {data && (
                    <div className="grid grid-cols-4 gap-1">
                        <Inputs
                            register={register}
                            name="received_cc"
                            label="ปริมาณรับ (cc)"
                            type="number"
                            defaultValue={data?.data.reaction.reactionBloodCC}
                        />
                        <Inputs
                            register={register}
                            name="used_time"
                            label="เวลาที่ใช้"
                            type="time"
                            defaultValue={dayjs(data?.data.reaction.receiveBloodTime).format("HH:mm")}
                        />
                        <Inputs
                            register={register}
                            name="symptom_time"
                            label="เวลามีอาการ"
                            type="time"
                            defaultValue=
                            {dayjs(data?.data.reaction.reactionBloodTime).format("HH:mm")}
                        />
                        <Inputs
                            register={register}
                            name="body_temp"
                            label="มีไข้ (อุณหภูมิ)"
                            type="number"
                            defaultValue={data?.data.reaction.reactionFluTemp}
                        />
                    </div>
                )}
                {data && (
                    <SymptomCheckboxGroup
                        register={register}
                        data={data?.data.reaction}
                    />
                )}
            </div>
        </MobilePrivateLayout>
    )
}