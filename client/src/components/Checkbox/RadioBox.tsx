interface RadioCardProps {
    label: string;
    value: string;
    name: string;
    checkedValue: string;
    onChange: (value: string) => void;
    color?: string;
    labelSub?: string;
}

export const RadioBox = ({
    label,
    value,
    name,
    checkedValue,
    onChange,
    color = 'bg-blue-600',
    labelSub = ""
}: RadioCardProps) => {
    return (
        <div
            className={`flex flex-col items-center text-white p-3 rounded-lg w-28 h-28 justify-between shadow-md cursor-pointer ${color}`}
            onClick={() => onChange(value)}
        >
            <div className="text-center">
                <p className="text-lg font-bold">{label}</p>
                <p className="text-sm">{labelSub}</p>
            </div>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checkedValue === value}
                onChange={() => onChange(value)}
                className="w-4 h-4 rounded-full border-2 border-white appearance-none cursor-pointer transition checked:bg-black bg-white"
            />
        </div>
    );
};




