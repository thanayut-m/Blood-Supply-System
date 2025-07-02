import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Checkbox } from "../../../../components/Checkbox/CheckBox";

interface SymptomCheckboxGroupProps<T extends FieldValues> {
    register: UseFormRegister<T>;
}

export const SymptomCheckboxGroup = <T extends FieldValues>({
    register
}: SymptomCheckboxGroupProps<T>) => (
    <div className="grid grid-cols-5 gap-2">
        <Checkbox
            register={register}
            name={"chills" as Path<T>}
            checked={false}
            label="หนาวสั่น"
        />
        <Checkbox
            register={register}
            name={"rash" as Path<T>}
            checked={false}
            label="มีผื่นแดง"
        />
        <Checkbox
            register={register}
            name={"headache" as Path<T>}
            checked={false}
            label="ปวดศีรษะ"
        />
        <Checkbox
            register={register}
            name={"nausea" as Path<T>}
            checked={false}
            label="คลื่นไส้"
        />
        <Checkbox
            register={register}
            name={"vomiting" as Path<T>}
            checked={false}
            label="อาเจียน"
        />
        <Checkbox
            register={register}
            name={"dyspnea" as Path<T>}
            checked={false}
            label="หายใจขัด"
        />
        <Checkbox
            register={register}
            name={"cyanosis" as Path<T>}
            checked={false}
            label="ตัวเขียว"
        />
        <Checkbox
            register={register}
            name={"shock" as Path<T>}
            checked={false}
            label="Shock"
        />
        <Checkbox
            register={register}
            name={"back_pain" as Path<T>}
            checked={false}
            label="ปวดหลัง"
        />
        <Checkbox
            register={register}
            name={"low_bp" as Path<T>}
            checked={false}
            label="BP ต่ำ"
        />
    </div>
);
