import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface AutocompletesProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
}

export const Autocompletes = <T extends FieldValues>({
    name,
    label,
    control
}: AutocompletesProps<T>) => {
    const options = [
        { label: '', id: null },
        { label: 'Pulp Fiction', id: 2 },
    ];

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Autocomplete
                    {...field}
                    fullWidth
                    size="small"
                    options={options}
                    getOptionLabel={(option) => option.label}
                    onChange={(_, value) => field.onChange(value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
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
                    )}
                />
            )}
        />
    );
};
