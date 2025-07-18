import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Checkbox } from "../../../../../components/Checkbox/CheckBox";
import type { ReactionResponse } from "../../../types/bloodReaction.types";

interface SymptomCheckboxGroupProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    data: ReactionResponse;
}

export const SymptomCheckboxGroup = <T extends FieldValues>(
    { register, data }: SymptomCheckboxGroupProps<T>
) => {
    return (
        <div className="grid grid-cols-5 gap-2">
            <Checkbox
                register={register}
                name={"chills" as Path<T>}
                defaultChecked={!!data.reactionCold}
                label="หนาวสั่น"
            />
            <Checkbox
                register={register}
                name={"rash" as Path<T>}
                defaultChecked={!!data.reactionRash}
                label="มีผื่นแดง"
            />
            <Checkbox
                register={register}
                name={"headache" as Path<T>}
                defaultChecked={!!data.reactionHeadache}
                label="ปวดศีรษะ"
            />
            <Checkbox
                register={register}
                name={"nausea" as Path<T>}
                defaultChecked={!!data.reactionNausea}
                label="คลื่นไส้"
            />
            <Checkbox
                register={register}
                name={"vomiting" as Path<T>}
                defaultChecked={!!data.reactionVolmit}
                label="อาเจียน"
            />
            <Checkbox
                register={register}
                name={"dyspnea" as Path<T>}
                defaultChecked={!!data.reactionBreath}
                label="หายใจขัด"
            />
            <Checkbox
                register={register}
                name={"cyanosis" as Path<T>}
                defaultChecked={!!data.reactionGreen}
                label="ตัวเขียว"
            />
            <Checkbox
                register={register}
                name={"shock" as Path<T>}
                defaultChecked={!!data.reactionShock}
                label="Shock"
            />
            <Checkbox
                register={register}
                name={"back_pain" as Path<T>}
                defaultChecked={!!data.reactionBackache}
                label="ปวดหลัง"
            />
            <Checkbox
                register={register}
                name={"low_bp" as Path<T>}
                defaultChecked={!!data.reactionBp}
                label="BP ต่ำ"
            />
        </div>
    )
}
