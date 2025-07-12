import { Buttons } from "../../../components/Buttons"
import { useForm } from "react-hook-form";
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout";
import { PatientInfoCard } from "./MobileBloodBankGiveDetail/PatientInfoCard";
import { AntibodyCard } from "./MobileBloodBankGiveDetail/AntibodyCard";
import { AutoControlCard } from "./MobileBloodBankGiveDetail/AutoControlCard";
import { BloodStatusSteps } from "./MobileBloodBankGiveDetail/BloodStatusSteps";
import { BloodBagInfoCard } from "./MobileBloodBankGiveDetail/BloodBagInfoCard";
import { BarcodeWarning } from "./MobileBloodBankGiveDetail/BarcodeWarning";
import { Modals } from "../../../components/modal/Modals";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FormInputScanV2 } from "../../../components/inputs/FormInputScanV2";
import { useLocation } from "react-router";
import { staffInfo, type OptionType } from "../../../functions/Auth";
import { PatientTransfusionDetail } from "../../../functions/AddPatientTransfusion";

export const MobileBloodBankGiveDetail = () => {
    const { register, setValue, control } = useForm<{
        bloodBagNo: string;
        bagFromTag: string;
        hn: string;
    }>({
        defaultValues: {
            bloodBagNo: "",
            bagFromTag: "",
            hn: ""
        }
    });

    const location = useLocation();
    const { bb_cross_macth_id } = location.state || {};

    const [openModal, setOpenModal] = useState<string | null>(null);
    const [staff, setStaff] = useState<OptionType[]>([]);
    const [patientTransfusion, setPatientTransfusion] = useState();

    const handleOpen = (modal: string) => {
        setOpenModal(modal);
    };

    const fetchStaff = async () => {
        staffInfo(setStaff);
    }

    const fetchPatientTransfusion = async () => {
        if (!bb_cross_macth_id) {
            console.warn("bb_cross_macth_id is missing!");
            return;
        }
        try {
            const data = await PatientTransfusionDetail(bb_cross_macth_id);
            console.log(data);
            setPatientTransfusion(data);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchPatientTransfusion();
        fetchStaff();
    }, []);

    const handleClose = () => {
        Swal.fire({
            title: "ยืนยันยกเลิกรายการ",
            icon: "warning",
            text: "คุณต้องการยกเลิกรายการนี้หรือไม่?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ตกลง",
            cancelButtonText: "ปิด",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "ยกเลิกสำเร็จ",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 600
                });
                setOpenModal(null);
            }
        });
    };

    const handleSubmitScanBarcode = () => {
        try {
            Swal.fire({
                title: "ข้อมูลถูกต้อง",
                icon: "success",
                text: "การระบุข้อมูลเพื่อยืนยันถุงโลหิตตรงกัน",
                confirmButtonText: "ปิด",
                timer: 1000
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <MobilePrivateLayout>
                <div className="flex flex-col gap-2">

                    {patientTransfusion && (
                        <PatientInfoCard
                            data={patientTransfusion}
                            control={control}
                            options={staff || []}
                        />
                    )}
                    <div className="grid grid-cols-2 gap-2 text-center text-[0.800rem]">
                        {patientTransfusion && (
                            <AntibodyCard data={patientTransfusion} />
                        )}
                        {patientTransfusion && (
                            <AutoControlCard data={patientTransfusion} />
                        )}
                    </div>

                    <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25 text-[0.600rem]">
                        <div className="flex flex-col gap-3">
                            {patientTransfusion && (
                                <BloodBagInfoCard data={patientTransfusion} />
                            )}
                            {patientTransfusion && (
                                <BloodStatusSteps data={patientTransfusion} />
                            )}
                        </div>
                    </div>

                    <Buttons
                        className="bg-[#FF7726] text-white py-5 px-5 rounded-xl"
                        onClick={() => handleOpen("openScanBarcode")}
                    >
                        <div className="flex flex-col">
                            <p className="text-[0.800rem]">ตรวจสอบการจ่ายโลหิต</p>
                            <p className="text-[0.600rem]">กรุณากดปุ่มเพื่อ Scan Barcode หน้าถุงโลหิต</p>
                        </div>
                    </Buttons>

                    {patientTransfusion && (
                        <BarcodeWarning data={patientTransfusion} />
                    )}

                    <Buttons
                        className="bg-blue-500 text-white py-3 px-5 rounded-3xl"
                        disabled
                    >
                        จ่ายโลหิต
                    </Buttons>
                </div>
            </MobilePrivateLayout>

            <Modals
                open={openModal === "openScanBarcode"}
                onClose={handleClose}
                width="w-[90%]"
                titleClassName="flex text-[#FF7726] text-[0.800rem] justify-center mb-4"
                title="กรุณา Scan Barcode ที่ถุงโลหิตเพื่อตรวจสอบ"
                content={
                    <div className="flex flex-col gap-5">
                        <FormInputScanV2
                            register={register}
                            setValue={setValue}
                            control={control}
                            name="bloodBagNo"
                            type="text"
                            label="เลขถุงโลหิต"
                            placeholder="ระบุเลขที่ถุงโลหิต จากถุงโลหิต"
                        />

                        <FormInputScanV2
                            register={register}
                            setValue={setValue}
                            control={control}
                            name="bagFromTag"
                            type="text"
                            label="เลขถุงจากใบคล้อง"
                            placeholder="ระบุเลขที่ถุงโลหิต จากถุงใบคล้อง"
                        />

                        <FormInputScanV2
                            register={register}
                            setValue={setValue}
                            control={control}
                            name="hn"
                            type="text"
                            label="HN"
                            placeholder="ระบุเลข HN ผู้รับเลือด จากใบเบิกโลหิต"
                        />
                    </div>
                }
                actions={
                    <div className="flex flex-row gap-3 mt-3">
                        <Buttons
                            className="bg-[#FF7726] text-white py-3 px-5 rounded-3xl"
                            onClick={handleClose}
                        >
                            ยกเลิก
                        </Buttons>
                        <Buttons
                            className="bg-blue-500 text-white py-3 px-5 rounded-3xl"
                            onClick={handleSubmitScanBarcode}
                        >
                            ยืนยัน
                        </Buttons>
                    </div>
                }
            />
        </div>
    )
}