import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import top100Films from './top100Films';

interface AutocompletesProps {
    label: string;
}

export const Autocompletes = ({
    label
}: AutocompletesProps) => {
    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
    ];
    return (
        <Autocomplete
            fullWidth
            disablePortal
            options={options}
            size='small'
            renderInput={(params) => <TextField
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
            />}
        />
    )
}