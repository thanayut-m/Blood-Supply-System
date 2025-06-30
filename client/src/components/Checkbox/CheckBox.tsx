
interface RadioBoxProps {
    label: string;
    name: string;
    value: string;
    checkedValue: string;
    onChange: (value: string) => void;
}

export const RadioBox = ({ label, name, value, checkedValue, onChange }: RadioBoxProps) => {
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