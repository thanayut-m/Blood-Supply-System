import type { FieldValues, Path, UseFormRegister, UseFormSetValue } from "react-hook-form"
import { Input } from "./Input"
import { AiOutlineScan } from "react-icons/ai";
import { Modals } from "../modal/Modals";
import { useState } from "react";
import { Scanner } from "../Scanner";
import { Buttons } from "../Buttons";

interface FormInputScanProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    setValue: UseFormSetValue<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type: string;
}

export const FormInputScan = <T extends FieldValues>({
    register,
    setValue,
    name,
    label,
    placeholder,
    type
}: FormInputScanProps<T>) => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const handleOpen = (modal: string) => setOpenModal(modal);
    const handleClose = () => {
        setOpenModal(null);
    };

    const handleScanResult = (value: string) => {
        setValue(name, value as T[typeof name]);
        handleClose();
    };

    return (
        <div>
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">{label}</legend>
                <div className="relative w-full">
                    <Input
                        register={register}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                    />
                    <button
                        type="button"
                        onClick={() => handleOpen("createUser")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500 hover:text-blue-600 focus:outline-none"
                    >
                        <AiOutlineScan />
                    </button>
                </div>
            </fieldset>

            <Modals
                open={openModal === "createUser"}
                onClose={handleClose}
                width="w-[85%]"
                title="Scan"
                content={
                    <Scanner
                        onResult={handleScanResult}
                    />}
                actions={
                    <>
                        <Buttons
                            onClick={handleClose}
                            variant="error"
                        >
                            ปิด
                        </Buttons>
                    </>
                }
            />
        </div>
    );
};
