import TextField from '@mui/material/TextField';
import type {
  FieldValues,
  Path,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';
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
  multiline?: boolean;
  rows?: number;
}

export const Inputs = <T extends FieldValues>({
  register,
  name,
  id,
  label,
  type,
  defaultValue = '',
  disabled = false,
  errors,
  size = 'small',
  multiline = false,
  rows,
}: InputsProps<T>) => {
  const errorMessage =
    name && errors?.[name]?.message?.toString?.() || '';

  return (
    <TextField
      fullWidth
      {...(register && name ? register(name) : {})}
      id={id || name}
      label={label}
      type={type}
      defaultValue={defaultValue}
      variant="outlined"
      disabled={disabled}
      autoComplete="new-password"
      error={!!(name && errors?.[name])}
      helperText={errorMessage}
      size={size}
      multiline={multiline}
      rows={rows}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          fontSize: '0.7rem',
        },
        // '& .MuiInputLabel-root': {
        //   fontSize: '0.7rem',
        // },
        '& .MuiFormHelperText-root': {
          fontSize: '0.65rem',
        },
      }}
    />
  );
};
