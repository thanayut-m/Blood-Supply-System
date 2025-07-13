import { useRef, useState } from "react";
import { useWatch, type FieldValues, type Path, type UseFormRegister, type UseFormSetValue, type Control } from "react-hook-form";
import { AiOutlineScan } from "react-icons/ai";
import { Modals } from "../modal/Modals";
import { Buttons } from "../Buttons";
import { Scanner } from "../Scanner";
import type { ScannerRef } from "../Scanner";

interface FormInputScanV2Props<T extends FieldValues> {
    register: UseFormRegister<T>;
    setValue: UseFormSetValue<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type: string;
    control: Control<T>;
    error: boolean
}

export const FormInputScanV2 = <T extends FieldValues>({
    register,
    setValue,
    name,
    label,
    placeholder,
    type,
    control,
    error
}: FormInputScanV2Props<T>) => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    const scannerRef = useRef<ScannerRef>(null);

    const value = useWatch({ name, control });

    const handleOpen = (modal: string) => setOpenModal(modal);
    const handleClose = () => setOpenModal(null);

    const handleScanResult = (value: string) => {
        setValue(name, value as T[typeof name]);
        handleClose();
    };

    const handleCloseScan = () => {
        console.log("ปิดกล้อง")
        scannerRef.current?.stopCamera();
        handleClose();
    }


    return (
        <div>
            <fieldset className="fieldset">
                <div className="relative w-full">
                    <div className="relative border border-[#656565] rounded-md py-4 px-2 focus-within:ring-2 focus-within:ring-blue-500">
                        <label className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-sm text-[#656565]">
                            {label}
                        </label>
                        <input
                            {...register(name)}
                            type={type}
                            placeholder={placeholder}
                            className={
                                `${value?.length > 1
                                    ? (error ? "text-green-500" : "text-red-500")
                                    : ""} 
                                    ${value ? "text-2xl" : "text-[0.800rem] py-2"} 
                                    text-gray-400 tracking-widest w-full bg-transparent border-none focus:outline-none text-center`
                            }
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => handleOpen("createUser")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500 focus:outline-none"
                    >
                        <AiOutlineScan size={"25px"} />
                    </button>
                </div>
            </fieldset>

            <Modals
                open={openModal === "createUser"}
                onClose={handleClose}
                width="w-[100%]"
                high="h-full"
                content={
                    <div >
                        <Scanner
                            ref={scannerRef}
                            onResult={handleScanResult}
                        />
                    </div>
                }
                actions={
                    <Buttons
                        onClick={handleCloseScan}
                        className="bg-red-500 py-2 text-[0.800rem] rounded-2xl mt-2"
                    >
                        ปิด
                    </Buttons>
                }
            />
        </div>
    );
};
