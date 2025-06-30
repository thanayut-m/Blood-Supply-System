import { useState } from "react";
import { Buttons } from "../../../components/Buttons"
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout"
import { Modals } from "../../../components/modal/Modals";
import { FormInputScan } from "../../../components/inputs/FormInputScan";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const MobileBloodBankGiveDetail = () => {
    const { register, setValue, reset } = useForm({});
    const [openModal, setOpenModal] = useState<string | null>(null);


    const handleOpen = (modal: string) => {
        setOpenModal(modal);
        reset({
            bloodCode: "",
            bloodSling: "",
            bloodHN: ""
        });
    };

    const handleClose = () => {
        Swal.fire({
            text: "ยืนยันการยกเลิก",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ตกลง",
            cancelButtonText: "ยกเลิก"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "ยกเลิกสำเร็จ",
                    icon: "success"
                });
                setOpenModal(null);
            }
        });

    };


    const handleSave = async () => {
        try {
            Swal.fire({
                icon: "success",
                title: "ให้โลหิตสำเร็จ",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <MobilePrivateLayout>
                <div className="p-2 bg-white rounded-lg shadow-md space-y-3 text-gray-800">
                    <div>
                        <div className="text-lg font-semibold mb-2">ข้อมูลผู้ขอเลือด</div>
                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                            <div className="col-span-2">
                                HN :&nbsp;
                                <span className="font-medium">
                                    123456789
                                </span>
                            </div>
                            <div className="col-span-2">
                                ชื่อ-สกุล :&nbsp;
                                <span className="font-medium">
                                    นายทดสอบ ทดสอบ
                                </span>
                            </div>
                            <div>
                                อายุ :&nbsp;
                                <span className="font-medium">
                                    18
                                </span>
                            </div>
                            <div>
                                เพศ :&nbsp;
                                <span className="font-medium">
                                    ชาย
                                </span>
                            </div>
                            <div>
                                หมู่เลือด :&nbsp;
                                <span className="font-medium">
                                    O
                                </span>
                            </div>
                            <div>
                                Rh :&nbsp;
                                <span className="font-medium">
                                    +
                                </span>
                            </div>
                            <div>
                                วันที่ให้โลหิต :&nbsp;
                                <span className="font-medium">
                                    30/06/2568
                                </span>
                            </div>
                            <div>
                                เวลาที่ให้โลหิต :&nbsp;
                                <span className="font-medium">
                                    10:51:50
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 text-sm">
                        <div className="bg-gray-50 p-2 rounded-lg border">
                            <div className="text-base font-semibold text-gray-700 mb-1">
                                Antibody Screening : <span className="text-green-600">Negative</span>
                            </div>
                            <div className="grid grid-cols-2 gap-y-1">
                                <div></div>
                                <div className="font-semibold">Result</div>

                                <div className="text-right pr-2">O1 :</div>
                                <div className="text-left pl-2">Negative</div>

                                <div className="text-right pr-2">O2 :</div>
                                <div className="text-left pl-2">Negative</div>

                                <div className="text-right pr-2">O3 :</div>
                                <div className="text-left pl-2">Negative</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-2 rounded-lg border">
                            <div className="text-base font-semibold text-gray-700 mb-1">
                                Auto Control And DAT
                            </div>
                            <div className="grid grid-cols-2 gap-y-1">
                                <div></div>
                                <div className="font-semibold">Result</div>

                                <div className="text-right pr-2">AC :</div>
                                <div className="text-left pl-2">Negative</div>

                                <div className="text-right pr-2">DAT :</div>
                                <div className="text-left pl-2">Negative</div>

                                <div className="text-right pr-2">IAT :</div>
                                <div className="text-left pl-2">Negative</div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <div className="text-base font-semibold text-gray-700 mb-2">
                                สถานะถุงเลือด
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4 p-3 border rounded-md bg-gray-50 text-sm">
                                <div className="font-medium text-gray-700">1201201223233</div>
                                <div className="text-yellow-600 font-semibold">รอการตรวจสอบ</div>
                            </div>

                        </div>
                    </div>
                    <Buttons
                        onClick={() => handleOpen("openMenuBloodBankDetail")}
                        variant="secondary"
                    >
                        ตรวจสอบเลือด
                    </Buttons>
                </div>
            </MobilePrivateLayout>
            <Modals
                open={openModal === "openMenuBloodBankDetail"}
                onClose={handleClose}
                width="w-[80%]"
                title="เมนู"
                infoList={[
                    { label: "เลขที่ถุง", value: "12345678911" },
                ]}
                content={
                    <div className="flex flex-col gap-3">
                        <FormInputScan
                            register={register}
                            name="bloodCode"
                            setValue={setValue}
                            label="เลขที่ถุงโลหิต ที่ถุงโลหิต"
                            type="text"
                            placeholder="Search...."
                        />

                        <FormInputScan
                            register={register}
                            name="bloodSling"
                            setValue={setValue}
                            label="เลขที่ถุงโลหิต ที่ใบคล้อง"
                            type="text"
                            placeholder="Search...."
                        />
                        <FormInputScan
                            register={register}
                            name="bloodHN"
                            setValue={setValue}
                            label="HN จากใบเบิกโลหิต"
                            type="text"
                            placeholder="Search...."
                        />
                    </div>
                }
                actions={
                    <div className="grid grid-cols-2 w-full gap-2">
                        <Buttons
                            variant="error"
                            className="text-black"
                            onClick={handleClose}
                        >
                            ยกเลิก
                        </Buttons>
                        <Buttons
                            variant="success"
                            className="text-black"
                            onClick={handleSave}
                        >
                            ให้โลหิต
                        </Buttons>
                    </div>
                }
            />
        </div>
    )
}