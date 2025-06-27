import { Select } from "./Select"

interface FormSelectProps {
    label?: string
}

export const FormSelect = ({
    label
}: FormSelectProps) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">{label}</legend>
            <Select />
        </fieldset>
    )
}