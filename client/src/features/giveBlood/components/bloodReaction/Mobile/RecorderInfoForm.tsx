import type { Control, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../../../components/MUI/Inputs/Inputs";
import { Autocompletes } from "../../../../../components/MUI/Autocompletes";
import type { OptionType } from "../../../../../types/BloodBankGiveDetail/PatientInfoCard";
import type { NurseResponse, StaffResponse } from "../../../types/bloodReaction.types";
import dayjs from "dayjs";


interface RecorderInfoFormProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    control: Control<T>;
    option: OptionType[]
    data: {
        nurse: NurseResponse;
        staff: StaffResponse;
    }
}

export const RecorderInfoForm = <T extends FieldValues>({
    register,
    control,
    option,
    data
}: RecorderInfoFormProps<T>) => {
    return (
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-5">
                <Inputs
                    register={register}
                    name={"recorder_name" as Path<T>}
                    label="พยาบาลผู้บันทึกผล"
                    type="text"
                    defaultValue={data.nurse.nurseName}
                />
            </div>
            <div className="col-span-4">
                <Inputs
                    register={register}
                    name={"recorded_date" as Path<T>}
                    label="วันที่"
                    type="date"
                    defaultValue={dayjs(data.nurse.nurseDate).format("MM/DD/YYYY")}
                />
            </div>
            <div className="col-span-3">
                <Inputs
                    register={register}
                    name={"recorded_time" as Path<T>}
                    label="เวลา"
                    type="time"
                    defaultValue={data.nurse.nurseTime}
                />
            </div>
            <div className="col-span-5">
                <Autocompletes
                    options={option}
                    control={control}
                    name={"staff_name" as Path<T>}
                    label="ผู้บันทึก"
                />
            </div>
            <div className="col-span-4">
                <Inputs
                    register={register}
                    name={"recorder_date" as Path<T>}
                    label="วันที่"
                    type="date"
                    defaultValue={data.staff.staffName}
                />
            </div>
            <div className="col-span-3">
                <Inputs
                    register={register}
                    name={"recorder_time" as Path<T>}
                    label="เวลา"
                    type="time"
                    defaultValue={data.staff.staffTime}
                />
            </div>
        </div>
    )
}