import { useState } from "react";
import { useForm } from "react-hook-form";
import { MobilePrivateLayout2 } from "../../../layouts/MobilePrivateLayout2";
import { BloodBagDetails } from "./MobileBloodBankReaction/BloodBagDetails";
import { ReactionStatusRadio } from "./MobileBloodBankReaction/ReactionStatusRadio";
import { Autocompletes } from "../../../components/MUI/Autocompletes";
import { Inputs } from "../../../components/MUI/Inputs/Inputs";
import { SymptomCheckboxGroup } from "./MobileBloodBankReaction/SymptomCheckboxGroup";
import { RecorderInfoForm } from "./MobileBloodBankReaction/RecorderInfoForm";
import { Buttons } from "../../../components/Buttons";

interface FormData {
    symptom_severity: string;
    received_cc: string;
    used_time: string;
    symptom_time: string;
    body_temp: number;
    chills: boolean;
    rash: boolean;
    headache: boolean;
    nausea: boolean;
    vomiting: boolean;
    dyspnea: boolean;
    cyanosis: boolean;
    shock: boolean;
    back_pain: boolean;
    low_bp: boolean;
    note: string;
    recorded_by: string;
    recorded_date: string;
    recorded_time: string;
    recorder_name: string;
    recorder_date: string;
    recorder_time: string;
}

export const MobileBloodBankReaction = () => {
    const { register, control, handleSubmit } = useForm<FormData>({});
    const [selectedValue, setSelectedValue] = useState('normal');

    const handleSave = (data: FormData) => {
        try {
            const data2 = {
                selectedValue: selectedValue,
                symptom_severity: data.symptom_severity,
                received_cc: data.received_cc,
                used_time: data.used_time,
                symptom_time: data.symptom_time,
                body_temp: data.body_temp,
                chills: data.chills,
                rash: data.rash,
                headache: data.headache,
                nausea: data.nausea,
                vomiting: data.vomiting,
                dyspnea: data.dyspnea,
                cyanosis: data.cyanosis,
                shock: data.shock,
                back_pain: data.back_pain,
                low_bp: data.low_bp,
                note: data.note,
                recorded_by: data.recorded_by,
                recorded_date: data.recorded_date,
                recorded_time: data.recorded_time,
                recorder_name: data.recorder_name,
                recorder_date: data.recorder_date,
                recorder_time: data.recorder_time,
            };
            console.log(data2);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MobilePrivateLayout2>
            <div className="flex flex-col gap-2">
                <BloodBagDetails />
                <div>
                    <label className="text-[#B5B5B5] text-base">บันทึกปฏิกิริยาหลังรับเลือด</label>
                    <ReactionStatusRadio
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                    />
                </div>
                <div className="flex">
                    <Autocompletes
                        control={control}
                        name="symptom_severity"
                        label="ความรุนแรง"
                    />
                </div>
                <div className="grid grid-cols-4 gap-1">
                    <Inputs
                        register={register}
                        name="received_cc"
                        label="ปริมาณรับ (cc)"
                        type="number"
                        defaultValue=""
                    />
                    <Inputs
                        register={register}
                        name="used_time"
                        label="เวลาที่ใช้"
                        type="time"
                        defaultValue=""
                    />
                    <Inputs
                        register={register}
                        name="symptom_time"
                        label="เวลามีอาการ"
                        type="time"
                        defaultValue=""
                    />
                    <Inputs
                        register={register}
                        name="body_temp"
                        label="มีไข้ (อุณหภูมิ)"
                        type="number"
                        defaultValue=""
                    />
                </div>
                <SymptomCheckboxGroup register={register} />
                <div>
                    <Inputs
                        register={register}
                        multiline
                        rows={2}
                        name="note"
                        label="หมายเหตุ"
                        type="text"
                        defaultValue=""
                    />
                </div>
                <RecorderInfoForm register={register} />
                <hr className="text-[#B5B5B5]" />
                <div className="grid grid-cols-2 gap-2 ">
                    <Buttons
                        className="bg-[#FF7726] text-white">
                        ยกเลิก
                    </Buttons>
                    <Buttons
                        onClick={handleSubmit(handleSave)}
                        className="bg-[#2D63EA] text-white">
                        บันทึก
                    </Buttons>
                </div>
            </div>
        </MobilePrivateLayout2>
    );
};
