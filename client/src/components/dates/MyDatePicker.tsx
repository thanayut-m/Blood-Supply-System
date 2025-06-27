import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface MyDatePickerProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
}

export const MyDatePicker = <T extends FieldValues>({
    control,
    name,
}: MyDatePickerProps<T>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <DatePicker
                    selected={field.value ?? new Date()}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            )}
        />
    );
};
