import type { FieldValues, Path, UseFormRegister } from "react-hook-form"
import { Input } from "./Input"
import { AiOutlineScan } from "react-icons/ai";

interface FormInputScanProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
}

export const FormInputScan = <T extends FieldValues>({
    register,
    name,
    label,
    placeholder
}: FormInputScanProps<T>) => {


    const onOpen = () => {
        console.log("asdas")
    }

    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">{label}</legend>
            <div className="relative w-full">
                <Input
                    register={register}
                    name={name}
                    type="number"
                    placeholder={placeholder}
                />
                <div
                    onClick={onOpen}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500  focus:outline-none"
                >
                    <AiOutlineScan className="" />
                </div>
            </div>
        </fieldset>
    )
}