import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface CheckBoxProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    label: string;
    defaultChecked?: boolean;
}

export const Checkbox = <T extends FieldValues>({
    register,
    name,
    label,
    defaultChecked
}: CheckBoxProps<T>) => {
    return (
        <div className="flex text-[0.680rem] items-center gap-1 cursor-pointer">
            <input
                {...(register(name))}
                type="checkbox"
                defaultChecked={defaultChecked}
                className="checkbox checkbox-xs checkbox-neutral"
            />
            <span className="text-[#B5B5B5]">{label}</span>
        </div>
    )
}