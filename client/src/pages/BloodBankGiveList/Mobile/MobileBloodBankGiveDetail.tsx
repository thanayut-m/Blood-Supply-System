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
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FormInputScanV2 } from "../../../components/inputs/FormInputScanV2";
import { useLocation } from "react-router";
import { PatientTransfusionDetail, updatePatientTransfusion, updateUpdateGive } from "../../../functions/AddPatientTransfusion";
import type { PatientTransfusionProps } from "../../../types/BloodBankGiveDetail/BloodBankGiveDetail";
import type { TransfusionData } from "../../../types/BloodBankGiveDetail/TransfusionData";
import type { OptionType } from "../../../features/Auth/types/auth.types";

export const MobileBloodBankGiveDetail = ({
    currentStaff
}: PatientTransfusionProps) => {
    const { register, handleSubmit, setValue, control, watch, resetField } = useForm<{
        bloodBagNo: string;
        bagFromTag: string;
        hn: string;
        blood_donor_name?: OptionType;
    }>({
        defaultValues: {
            bloodBagNo: "",
            bagFromTag: "",
            hn: "",
            blood_donor_name: undefined,
        }
    });

    const location = useLocation();
    const { bb_cross_macth_id } = location.state || {};

    const [openModal, setOpenModal] = useState<string | null>(null);
    const [staff, setStaff] = useState<OptionType[]>([]);
    const [patientTransfusion, setPatientTransfusion] = useState<PatientTransfusionProps>();

    const handleOpen = (modal: string) => {
        resetField("bloodBagNo");
        resetField("bagFromTag");
        resetField("hn");
        setOpenModal(modal);
    };

    const fetchStaff = useCallback(async () => {
        fetchStaffOptions(setStaff);
    }, []);

    const fetchPatientTransfusion = useCallback(async () => {
        if (!bb_cross_macth_id) {
            console.warn("bb_cross_macth_id is missing!");
            return;
        }
        try {
            const data = await PatientTransfusionDetail(bb_cross_macth_id);
            setPatientTransfusion(data);
        } catch (error) {
            console.log(error)
        }

    }, [bb_cross_macth_id]);

    const handleSubmitScanBarcode = (data: TransfusionData) => {
        try {
            if (!isBloodBagMatched || !isBagFromTagMatched || !isHnMatched) {
                Swal.fire({
                    title: "ข้อมูลไม่ตรงกัน",
                    text: "กรุณาตรวจสอบข้อมูล Barcode อีกครั้ง",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1000
                });
                return;
            }

            updatePatientTransfusion(data, bb_cross_macth_id, fetchPatientTransfusion);
            setOpenModal(null);

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitUpdateGive = (data) => {
        try {
            const reCheckBloodGive = patientTransfusion?.check.reCheckBloodGive;

            updateUpdateGive(data, bb_cross_macth_id, reCheckBloodGive)

            fetchPatientTransfusion();

        } catch (error) {
            console.log(error)
        }
    }

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

    const watchBloodBagNo = watch("bloodBagNo");
    const watchBagFromTag = watch("bagFromTag");
    const watchHN = watch("hn");

    const isBloodBagMatched =
        patientTransfusion?.crossMatch?.bloodCode &&
        watchBloodBagNo === patientTransfusion.crossMatch.bloodCode;

    const isBagFromTagMatched =
        patientTransfusion?.crossMatch?.bloodCode &&
        watchBagFromTag === patientTransfusion.crossMatch.bloodCode;

    const isHnMatched =
        patientTransfusion?.crossMatch?.crossHN &&
        watchHN === patientTransfusion.crossMatch.crossHN;

    useEffect(() => {
        fetchPatientTransfusion();
        fetchStaff();
    }, [fetchPatientTransfusion, fetchStaff]);


    useEffect(() => {
        if (patientTransfusion?.patient) {
            setValue("blood_donor_name", {
                value:
                    patientTransfusion.patient.staffId != null
                        ? Number(patientTransfusion.patient.staffId)
                        : Number(currentStaff.staffId),
                label:
                    patientTransfusion.patient.staffName != null
                        ? patientTransfusion.patient.staffName
                        : currentStaff.staff,
            });
        }
    }, [patientTransfusion, setValue, currentStaff]);

    return (
        <div>
            <MobilePrivateLayout>
                <div className="flex flex-col gap-2">
                    {patientTransfusion && (
                        <PatientInfoCard
                            data={patientTransfusion.patient}
                            control={control}
                            options={staff}
                        />
                    )}
                    <div className="grid grid-cols-2 gap-2 text-center text-[0.800rem]">
                        {patientTransfusion && (
                            <AntibodyCard data={patientTransfusion.antibody} />
                        )}
                        {patientTransfusion && (
                            <AutoControlCard data={patientTransfusion.autoControl} />
                        )}
                    </div>

                    <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25 text-[0.600rem]">
                        <div className="flex flex-col gap-3">
                            {patientTransfusion && (
                                <BloodBagInfoCard data={patientTransfusion.crossMatch} />
                            )}
                            {patientTransfusion && (
                                <BloodStatusSteps data={patientTransfusion.status} />
                            )}
                        </div>
                    </div>

                    <Buttons
                        className={`${patientTransfusion?.check.reCheckBloodGive !== "Y"
                            ? "bg-[#FF7726]" : "bg-blue-500"} 
                            text-white py-5 px-5 rounded-xl`}
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

                    {patientTransfusion && (
                        <Buttons
                            onClick={handleSubmit(handleSubmitUpdateGive)}
                            className="bg-blue-500 text-white py-3 px-5 rounded-3xl"
                            disabled={patientTransfusion?.check.reCheckBloodGive !== "Y"}
                        >
                            จ่ายโลหิต
                        </Buttons>
                    )}
                </div>
            </MobilePrivateLayout >

            <Modals
                open={openModal === "openScanBarcode"}
                onClose={handleClose}
                width="w-[90%]"
                titleClassName="flex text-[#FF7726] text-[0.800rem] justify-center mb-4"
                title="กรุณา Scan Barcode ที่ถุงโลหิตเพื่อตรวจสอบ"
                content={
                    <form autoComplete="off" className="flex flex-col gap-5">
                        {/* {patientTransfusion && (
                            <>
                                <p className="text-sm text-gray-700">
                                    เลขถุงเลือด: {patientTransfusion.crossMatch.bloodCode}
                                </p>
                                <p className="text-sm text-gray-700">
                                    HN ผู้ป่วย: {patientTransfusion.crossMatch?.crossHN || "-"}
                                </p>
                            </>
                        )} */}

                        <FormInputScanV2
                            register={register}
                            setValue={setValue}
                            control={control}
                            name="bloodBagNo"
                            type="text"
                            label="เลขถุงโลหิต"
                            placeholder="ระบุเลขที่ถุงโลหิต จากถุงโลหิต"
                            error={!!isBloodBagMatched}
                        />

                        <FormInputScanV2
                            register={register}
                            setValue={setValue}
                            control={control}
                            name="bagFromTag"
                            type="text"
                            label="เลขถุงจากใบคล้อง"
                            placeholder="ระบุเลขที่ถุงโลหิต จากถุงใบคล้อง"
                            error={!!isBagFromTagMatched}
                        />

                        <FormInputScanV2
                            register={register}
                            setValue={setValue}
                            control={control}
                            name="hn"
                            type="text"
                            label="HN"
                            placeholder="ระบุเลข HN ผู้รับเลือด จากใบเบิกโลหิต"
                            error={!!isHnMatched}
                        />
                    </form>
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
                            onClick={handleSubmit(handleSubmitScanBarcode)}
                        >
                            ยืนยัน
                        </Buttons>
                    </div>
                }
            />
        </div >
    )
}