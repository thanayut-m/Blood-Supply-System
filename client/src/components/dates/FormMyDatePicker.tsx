import type { FieldValues, Path, Control } from "react-hook-form";
import { MyDatePicker } from "./MyDatePicker";

interface FormMyDatePickerProps<T extends FieldValues> {
    label: string;
    control: Control<T>;
    name: Path<T>;
}

export const FormMyDatePicker = <T extends FieldValues>({
    control,
    name,
    label,
}: FormMyDatePickerProps<T>) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">{label}</legend>
            <MyDatePicker control={control} name={name} />
        </fieldset>
    );
};
