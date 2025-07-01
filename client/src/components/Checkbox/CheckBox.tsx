interface CheckBoxProps {
    label?: string;
}

export const Checkbox = ({ label }: CheckBoxProps) => {
    return (
        <div className="flex text-[0.680rem] items-center gap-1 cursor-pointer">
            <input
                type="checkbox"
                // defaultChecked={defaultChecked}
                className="checkbox checkbox-xs checkbox-neutral"
            />
            <span className="text-[#B5B5B5]">{label}</span>
        </div>
    )
}