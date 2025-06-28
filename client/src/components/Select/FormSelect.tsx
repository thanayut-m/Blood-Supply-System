import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Select } from "./Select"

interface FormSelectProps<T extends FieldValues> {
    register: UseFormRegister<T>
    name: Path<T>
    label?: string;
    data: {
        value: string;
        name: string;
    }[];
}

export const FormSelect = <T extends FieldValues>({
    register,
    name,
    data,
    label
}: FormSelectProps<T>) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">{label}</legend>
            <Select
                register={register}
                name={name}
                data={data}
            />
        </fieldset>
    )
}