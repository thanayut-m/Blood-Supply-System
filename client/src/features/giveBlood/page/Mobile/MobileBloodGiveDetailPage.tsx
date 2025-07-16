import { useForm } from "react-hook-form";
import { MobilePrivateLayout } from "../../../../layouts/MobilePrivateLayout"
import { useStaffOptions } from "../../../Auth/hook/useStaffOptions";
import { PatientInfoCard } from "../../components/BloodGiveDetail/PatientInfoCard";
import { useTransfusionEntry } from "../../hook/useTransfusionEntry";
import { useCurrentUser } from "../../../Auth/hook/useCurrentUser";
import { useEffect, useState } from "react";
import type { BloodGiveDetailPayload } from "../../types/transfusion.types";
import { AntibodyCard } from "../../components/BloodGiveDetail/AntibodyCard";
import { AutoControlCard } from "../../components/BloodGiveDetail/AutoControlCard";
import { BloodBagInfoCard } from "../../components/BloodGiveDetail/BloodBagInfoCard";
import { BloodStatusSteps } from "../../components/BloodGiveDetail/BloodStatusSteps";
import { BarcodeWarning } from "../../components/BloodGiveDetail/BarcodeWarning";
import { Buttons } from "../../../../components/Buttons";
import { Modals } from "../../../../components/modal/Modals";
import { BloodBagScanInput } from "../../components/BloodGiveDetail/BloodBagScanInput";
import Swal from "sweetalert2";

export const MobileBloodGiveDetailPage = (
) => {
    const {
        register,
        control,
        setValue,
        handleSubmit,
        watch,
        resetField
    } = useForm<BloodGiveDetailPayload>({});
    const [openModal, setOpenModal] = useState<string | null>(null);
    const { staffOptions } = useStaffOptions();
    const { data, loading, updateBloodGiveMap } = useTransfusionEntry();
    const { user } = useCurrentUser()

    useEffect(() => {
        if (data && user) {
            setValue("blood_donor_name", {
                value: data.data.patient.staffId ?? user.staffId,
                label: data.data.patient.staffName ?? user.staff,
            });
        }
    }, [data, user, setValue]);

    const handleOpen = (modal: string) => {
        setOpenModal(modal);
        resetField("bloodBagNo");
        resetField("bagFromTag");
        resetField("hn");
    };

    const handleSubmitUpdateGive = (formData: BloodGiveDetailPayload) => {
        updateBloodGiveMap(formData, () => {
            setOpenModal(null);
        })
    }

    const handleCloseScanBarcode = () => {
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

    if (loading) return <p>กำลังโหลด...</p>;
    return (
        <div>
            <MobilePrivateLayout>
                <div className="flex flex-col gap-2">
                    {data && (
                        <PatientInfoCard
                            data={data.data.patient}
                            control={control}
                            options={staffOptions}
                        />
                    )}
                    <div className="grid grid-cols-2 gap-2 text-center text-[0.800rem]">
                        {data && (
                            <AntibodyCard data={data.data.antibody} />
                        )}
                        {data && (
                            <AutoControlCard data={data.data.autoControl} />
                        )}
                    </div>

                    <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25 text-[0.600rem]">
                        <div className="flex flex-col gap-3">
                            {data && (
                                <BloodBagInfoCard data={data.data.crossMatch} />
                            )}
                            {data && (
                                <BloodStatusSteps data={data.data.status} />
                            )}
                        </div>
                    </div>

                    <Buttons
                        className={`${data?.data?.check.reCheckBloodGive !== "Y"
                            ? "bg-[#FF7726]" : "bg-blue-500"} 
                                    text-white py-5 px-5 rounded-xl`}
                        onClick={() => handleOpen("openScanBarcode")}
                    >
                        <div className="flex flex-col">
                            <p className="text-[0.800rem]">ตรวจสอบการจ่ายโลหิต</p>
                            <p className="text-[0.600rem]">กรุณากดปุ่มเพื่อ Scan Barcode หน้าถุงโลหิต</p>
                        </div>
                    </Buttons>

                    {data && (
                        <BarcodeWarning data={data.data} />
                    )}

                    {data && (
                        <Buttons
                            // onClick={handleSubmit(handleSubmitUpdateGive)}
                            className="bg-blue-500 text-white py-3 px-5 rounded-3xl"
                            disabled={data.data?.check.reCheckBloodGive !== "Y"}
                        >
                            จ่ายโลหิต
                        </Buttons>
                    )}
                </div>
            </MobilePrivateLayout >

            <Modals
                open={openModal === "openScanBarcode"}
                width="w-[90%]"
                titleClassName="flex text-[#FF7726] text-[0.800rem] justify-center mb-4"
                title="กรุณา Scan Barcode ที่ถุงโลหิตเพื่อตรวจสอบ"
                content={
                    <BloodBagScanInput
                        data={data?.data}
                        register={register}
                        control={control}
                        setValue={setValue}
                        watch={watch}
                    />
                }
                actions={
                    <div className="flex flex-row gap-3 mt-3">
                        <Buttons
                            className="bg-[#FF7726] text-white py-3 px-5 rounded-3xl"
                            onClick={handleCloseScanBarcode}
                        >
                            ยกเลิก
                        </Buttons>
                        <Buttons
                            className="bg-blue-500 text-white py-3 px-5 rounded-3xl"
                            onClick={handleSubmit(handleSubmitUpdateGive)}
                        >
                            ยืนยัน
                        </Buttons>
                    </div>
                }
            />
        </div >
    )
}