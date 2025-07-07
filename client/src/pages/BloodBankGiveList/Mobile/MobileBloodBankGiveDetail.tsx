import { useState } from "react";
import { Buttons } from "../../../components/Buttons"
import { Modals } from "../../../components/modal/Modals";
import { FormInputScan } from "../../../components/inputs/FormInputScan";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FormSelect } from "../../../components/Select/FormSelect";
import { MobilePrivateLayout2 } from "../../../layouts/MobilePrivateLayout2";
import { Autocompletes } from "../../../components/MUI/Autocompletes";

export const MobileBloodBankGiveDetail = () => {
    const { register, setValue, reset, control } = useForm({});
    const [openModal, setOpenModal] = useState<string | null>(null);


    const handleOpen = (modal: string) => {
        setOpenModal(modal);
        reset({
            bloodCode: "",
            bloodSling: "",
            bloodHN: ""
        });
    };

    const datas = [
        { value: "1", name: "Ward 1" },
        { value: "2", name: "Ward 2" },
        { value: "3", name: "Ward 3" },
        { value: "4", name: "Ward 4" },
        { value: "5", name: "Ward 5" },
    ];

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
            setOpenModal(null);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <MobilePrivateLayout2>
                <div className="flex flex-col gap-2">
                    <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25">
                        <label className="text-[#B5B5B5]">
                            ข้อมูลผู้ขอโลหิต
                        </label>
                        <div className="grid grid-cols-12 px-3 gap-1 text-[0.600rem] mt-1">
                            <div className="col-span-8 text-[#B5B5B5]">
                                ชื่อผู้ป่วย <span className="text-black">
                                    นายทดสอบระบบ ล็อกอินส์
                                </span>
                            </div>
                            <div className="col-span-4 text-[#B5B5B5]">
                                HN <span className="text-black">
                                    650060141
                                </span>
                            </div>
                            <div className="col-span-3 text-[#B5B5B5]">
                                อายุ <span className="text-black">
                                    47
                                </span>
                            </div>
                            <div className="col-span-3 text-[#B5B5B5]">
                                เพศ <span className="text-black">
                                    ชาย
                                </span>
                            </div>
                            <div className="col-span-3 text-[#B5B5B5]">
                                หมู่เลือด <span className="text-black">
                                    O
                                </span>
                            </div>
                            <div className="col-span-3 text-[#B5B5B5]">
                                Rh <span className="text-black">
                                    +
                                </span>
                            </div>
                            <div className="col-span-12 mt-1">
                                <div className="grid grid-flow-col gap-1">
                                    <div className="row-span-3">
                                        <div className="text-[#B5B5B5]">
                                            วันที่ให้โลหิต <span className="text-black">
                                                02/07/2568
                                            </span>
                                        </div>
                                        <div className="text-[#B5B5B5] mt-1">
                                            เวลาให้โลหิต <span className="text-black">
                                                15:33:28
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-span-4 row-span-2">
                                        <Autocompletes
                                            control={control}
                                            name="blood_donor_name"
                                            label="ผูให้โลหิต"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center text-[0.800rem]">
                        <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25 ">
                            <p className="text-[#B5B5B5] text-[0.600rem]">
                                Antibody Screening
                            </p>
                            <p>NEGATVE</p>
                            <hr className="text-[#B5B5B5]" />
                            <p className="text-[#B5B5B5]">
                                O1 <span className="text-black">
                                    NEGATVE
                                </span>
                            </p>
                            <p className="text-[#B5B5B5]">
                                O2 <span className="text-black">
                                    NEGATVE
                                </span>
                            </p>
                            <p className="text-[#B5B5B5]">
                                O3 <span className="text-black">
                                    NEGATVE
                                </span>
                            </p>
                        </div>
                        <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25">
                            <p className="text-[#B5B5B5] text-[0.600rem]">
                                auto Control and DAT
                            </p>
                            <hr className="text-[#B5B5B5] mt-5" />
                            <p className="text-[#B5B5B5]">
                                AC <span className="text-black">
                                    NEGATVE
                                </span>
                            </p>
                            <p className="text-[#B5B5B5]">
                                DAT <span className="text-black">
                                    NEGATVE
                                </span>
                            </p>
                            <p className="text-[#B5B5B5]">
                                O3 <span className="text-black">
                                    NEGATVE
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25 text-[0.600rem]">
                        <div className="flex flex-col gap-3">
                            <div className="grid grid-cols-12">
                                <div className="col-span-4">รูปภาพ</div>
                                <div className="col-span-8 flex flex-col gap-1">
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            เลชที่ถุง
                                        </p>
                                        <p className="col-span-7 text-start">
                                            21066101405
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            หมู่เลือด
                                        </p>
                                        <p className="col-span-7 text-start">
                                            O
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            Rh
                                        </p>
                                        <p className="col-span-7 text-start">
                                            +
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            ประเภทโลหิต
                                        </p>
                                        <p className="col-span-7 text-start">
                                            Pack Red Call (PRC)
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            วันที่หมดอายุ
                                        </p>
                                        <p className="col-span-7 text-start">
                                            01/03/2568
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            ปริมาณ (cc)</p>
                                        <p className="col-span-7 text-start">
                                            450
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            result
                                        </p>
                                        <p className="col-span-7 text-start">
                                            NEGATVE
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            ผู้ทำ
                                        </p>
                                        <p className="col-span-7 text-start">
                                            นายทดสอบระบบ ล็อกอินส์
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            วัน/เวลา ที่ทำ
                                        </p>
                                        <p className="col-span-7 text-start">
                                            01/03/2568 10:00
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            ผู้คล้อง
                                        </p>
                                        <p className="col-span-7 text-start">
                                            นายทดสอบระบบ ล็อกอินส์
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            วัน/เวลา คล้อง
                                        </p>
                                        <p className="col-span-7 text-start">
                                            01/03/2568 10:00
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <p className="col-span-5 text-end text-[#B5B5B5]">
                                            หมายเหตุ
                                        </p>
                                        <p className="col-span-7 text-start">
                                            -
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-2 text-center">
                                <div className="bg-blue-200 rounded-lg px-4 py-2 shadow-xl/25">
                                    <p className="text-black">คล้องโลหิต</p>
                                    <p>🔵</p>
                                </div>
                                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                                    <p className="text-[#B5B5B5]">ตรวจสอบ</p>
                                    <p>⚪</p>
                                </div>
                                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                                    <p className="text-[#B5B5B5]">จ่ายโลหิต</p>
                                    <p>⚪</p>
                                </div>
                                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                                    <p className="text-[#B5B5B5]">ปฏิกิริยา</p>
                                    <p>⚪</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Buttons
                        className="bg-blue-700 text-white py-3 px-5 rounded-xl"
                    >
                        <div className="flex flex-col">
                            <p className="text-[0.800rem]">ตรวจสอบการจ่ายโลหิต</p>
                            <p className="text-[0.600rem]">กรุณากดปุ่มเพื่อ Scan Barcode หน้าถุงโลหิต</p>
                        </div>
                    </Buttons>
                    <div>
                        สถานะตรวจสอบ
                    </div>
                    <Buttons
                        className="bg-blue-700 text-white py-3 px-5 rounded-3xl"
                    >
                        จ่ายโลหิต
                    </Buttons>
                </div>
            </MobilePrivateLayout2>
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
                        <FormSelect
                            register={register}
                            name="BloodDonor"
                            label="ผู้ให้เลือด"
                            data={datas}
                        />
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