import { Input } from "./Input"
import type { FieldValues, FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
    type: string;
    label: string;
    placeholder: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    errors?: FieldErrors<T>;
}
export const FormInput = <T extends FieldValues>({
    type,
    label,
    placeholder,
    register,
    name,
    errors = {}
}: FormInputProps<T>) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">{label}</legend>
            <Input
                register={register}
                name={name}
                errors={errors}
                type={type}
                placeholder={placeholder}
            />
        </fieldset>
    )
}