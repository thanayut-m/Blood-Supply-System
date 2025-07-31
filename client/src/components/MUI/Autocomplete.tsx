import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

type OptionType = {
    label: string;
    value: string | number;
};

interface ControlledAutocompleteProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    size: "small" | "medium";
    options: OptionType[];
}

export const ControlledAutocomplete = <T extends FieldValues>({
    control,
    name,
    label,
    size,
    options,
}: ControlledAutocompleteProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={"" as T[typeof name]}
            render={({ field: { onChange, value } }) => {
                const selectedOption = options.find((opt) => opt.value === value) || null;

                return (
                    <Autocomplete
                        size={size}
                        options={options}
                        getOptionLabel={(option) => option.label}
                        isOptionEqualToValue={(option, val) => option.value === val.value}
                        value={selectedOption}
                        onChange={(event, newValue) => {
                            onChange(newValue ? newValue.value : "");
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label={label} fullWidth />
                        )}
                    />
                );
            }}
        />
    );
};
