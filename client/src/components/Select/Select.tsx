import { type FieldValues, type Path, type UseFormRegister } from "react-hook-form";

interface SelectProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>
    data: {
        value: string;
        name: string;
    }[];
}

export const Select = <T extends FieldValues>({
    register,
    name,
    data
}: SelectProps<T>) => {
    return (
        <select
            {...register(name)}
            defaultValue=""
            className="select w-full"
        >
            <option value="">ทั้งหมด</option>
            {data.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.name}
                </option>
            ))}
        </select>
    );
}
