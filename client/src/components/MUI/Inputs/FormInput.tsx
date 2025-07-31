import { TextField } from "@mui/material"
import type { FieldValues, Path, UseFormRegister } from "react-hook-form"

interface FormInputProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    label: string,
    variant?: "outlined" | "filled" | "standard";
    size?: "small" | "medium";
    type?: string;
    defaultValue?: string | number;
}

export const FormInput = <T extends FieldValues>(
    {
        register,
        name,
        label,
        variant = "outlined",
        size = "small",
        type = "text",
        defaultValue
    }: FormInputProps<T>
) => {
    return (
        <TextField
            {...register(name)}
            id="outlined-basic"
            label={label}
            variant={variant}
            size={size}
            type={type}
            fullWidth
            defaultValue={defaultValue}
        />
    )
}