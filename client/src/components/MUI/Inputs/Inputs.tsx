import TextField from '@mui/material/TextField';
import type { FieldValues, Path, UseFormRegister, FieldErrors } from 'react-hook-form';
import type { TextFieldProps } from '@mui/material/TextField';

interface InputsProps<T extends FieldValues> {
  register?: UseFormRegister<T>;
  name?: Path<T>;
  label: string;
  type: string;
  id?: string;
  defaultValue?: string;
  disabled?: boolean;
  errors?: FieldErrors<T>;
  size?: TextFieldProps['size'];
}

export const Inputs = <T extends FieldValues>({
  // register,
  name,
  // id,
  label,
  type,
  defaultValue = '',
  disabled = false,
  errors = {},
  size = "small"
}: InputsProps<T>) => {

  return (
    <TextField
      fullWidth
      // {...register(name)}
      // id={id || name}
      label={label}
      type={type}
      defaultValue={defaultValue}
      variant="outlined"
      disabled={disabled}
      autoComplete="new-password"
      // error={!!errors[name]}
      helperText={errors[name]?.message?.toString() || ""}
      size={size}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          fontSize: '0.7rem',
        },
        '& .MuiInputLabel-root': {
          fontSize: '0.7rem',
        },
        '& .MuiFormHelperText-root': {
          fontSize: '0.65rem',
        },
      }}
    />
  )
}