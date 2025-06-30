
interface CheckBoxProps {
    label: string;
    name: string;
    value: string;
    checkedValue: string;
    onChange: (value: string) => void;
}

export const CheckBox = ({ label, name, value, checkedValue, onChange }: CheckBoxProps) => {
    return (
        <label className="label text-black">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checkedValue === value}
                onChange={() => onChange(value)}
                className="radio radio-xs"
            />
            <span>{label}</span>
        </label>
    );
};