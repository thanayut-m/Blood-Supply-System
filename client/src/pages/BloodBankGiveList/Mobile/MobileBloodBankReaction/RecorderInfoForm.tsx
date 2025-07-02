import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../../components/MUI/Inputs/Inputs";


interface RecorderInfoFormProps<T extends FieldValues> {
    register: UseFormRegister<T>;
}

export const RecorderInfoForm = <T extends FieldValues>({
    register,
}: RecorderInfoFormProps<T>) => (
    <div className="grid grid-cols-12 gap-2">
        <div className="col-span-5">
            <Inputs
                register={register}
                name={"recorded_by" as Path<T>}
                label="พยาบาลผู้บันทึกผล"
                type="text"
                defaultValue="พญ.ทดสอบระบบ ล็อกอินส์"
            />
        </div>
        <div className="col-span-4">
            <Inputs
                register={register}
                name={"recorded_date" as Path<T>}
                label="วันที่"
                type="date"
            />
        </div>
        <div className="col-span-3">
            <Inputs
                register={register}
                name={"recorded_time" as Path<T>}
                label="เวลา"
                type="time"
            />
        </div>
        <div className="col-span-5">
            <Inputs
                register={register}
                name={"recorder_name" as Path<T>}
                label="พยาบาลผู้บันทึกผล"
                type="text"
                defaultValue="พญ.ทดสอบระบบ ล็อกอินส์"
            />
        </div>
        <div className="col-span-4">
            <Inputs
                register={register}
                name={"recorder_date" as Path<T>}
                label="วันที่"
                type="date"
            />
        </div>
        <div className="col-span-3">
            <Inputs
                register={register}
                name={"recorder_time" as Path<T>}
                label="เวลา"
                type="time"
            />
        </div>
    </div>
);
