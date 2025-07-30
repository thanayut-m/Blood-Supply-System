import { Controller } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const ControlledAutocomplete = ({
    control,
    name,
    label,
    size,
    options,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => {
                const selectedOption = options.find(opt => opt.label === value) || null;

                return (
                    <Autocomplete
                        size={size}
                        options={options}
                        getOptionLabel={(option) => option.label}
                        isOptionEqualToValue={(option, val) => option.label === val}
                        value={selectedOption}
                        onChange={(event, newValue) => {
                            onChange(newValue ? newValue.label : "");
                        }}
                        renderInput={(params) => <TextField {...params} label={label} fullWidth />}
                    />
                );
            }}
        />
    );
};
