import type { Control, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../../../components/MUI/Inputs/Inputs";
import { Autocompletes } from "../../../../../components/MUI/Autocompletes";
import type { OptionType } from "../../../../Auth/types/auth.types";
import type { NurseResponse, StaffResponse } from "../../../types/bloodReaction.types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

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
    dayjs.extend(customParseFormat);
    const nurseTime = data.nurse?.nurseTime;
    const staffTime = data.staff?.staffTime;
    const parsedNurseTime = dayjs(nurseTime, "HH:mm:ss");
    const parsedStaffTime = dayjs(staffTime, "HH:mm:ss");

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
                    defaultValue={
                        data.nurse.nurseDate ?
                            dayjs(data.nurse.nurseDate).format("YYYY-MM-DD") :
                            dayjs().format("YYYY-MM-DD")
                    }
                />
            </div>
            <div className="col-span-3">
                <Inputs
                    register={register}
                    name={"recorded_time" as Path<T>}
                    label="เวลา"
                    type="time"
                    defaultValue={
                        parsedNurseTime.isValid()
                            ? parsedNurseTime.format("HH:mm")
                            : dayjs().format("HH:mm")
                    }
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
                    defaultValue={
                        data.staff.staffDate ?
                            dayjs(data.staff.staffDate).format("YYYY-MM-DD") :
                            dayjs().format("YYYY-MM-DD")
                    }
                />
            </div>
            <div className="col-span-3">
                <Inputs
                    register={register}
                    name={"recorder_time" as Path<T>}
                    label="เวลา"
                    type="time"
                    defaultValue={
                        parsedStaffTime.isValid()
                            ? parsedStaffTime.format("HH:mm")
                            : dayjs().format("HH:mm")
                    }
                />
            </div>
        </div>
    )
}