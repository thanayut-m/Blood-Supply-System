import type { FieldValues, Path, UseFormRegister } from "react-hook-form"
import { Input } from "./Input"
import { AiOutlineScan } from "react-icons/ai";
import { Modals } from "../modal/Modals";
import { useState } from "react";
import { Scanner } from "../Scanner";

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
    const [openModal, setOpenModal] = useState<string | null>(null);

    const handleOpen = (modal: string) => {
        setOpenModal(modal);
        console.log(modal);
    };

    const handleClose = () => {
        setOpenModal(null);
    };

    return (
        <div>
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">{label}</legend>
                <div className="relative w-full">
                    <Input
                        register={register}
                        name={name}
                        type="number"
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
                title="Scan"
                content={
                    <Scanner />
                }
                actions={
                    <>
                        <button className="btn btn-primary" onClick={handleClose}>บันทึก</button>
                        <button className="btn" onClick={handleClose}>ยกเลิก</button>
                    </>
                }
            />
        </div>
    )
}
