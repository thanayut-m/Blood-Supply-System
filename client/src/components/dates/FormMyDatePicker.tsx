import { MyDatePicker } from "./MyDatePicker"

interface FormMyDatePickerProps {
    label: string
}

export const FormMyDatePicker = ({
    label
}: FormMyDatePickerProps) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">{label}</legend>
            <MyDatePicker />
        </fieldset>
    )
}