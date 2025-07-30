import { TextField } from "@mui/material"

export const FormInput = (
    {
        register,
        name,
        label,
        variant,
        size,
        type,
        defaultValue
    }
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