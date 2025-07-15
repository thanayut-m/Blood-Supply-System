import { useForm } from "react-hook-form";
import { MobilePrivateLayout } from "../../../../layouts/MobilePrivateLayout"
import { PatientInfoCard } from "../../components/BloodGiveDetail/PatientInfoCard";
import { AntibodyCard } from "../../components/BloodGiveDetail/AntibodyCard";
import { AutoControlCard } from "../../components/BloodGiveDetail/AutoControlCard";
import { BloodBagInfoCard } from "../../components/BloodGiveDetail/BloodBagInfoCard";
import { BloodStatusSteps } from "../../components/BloodGiveDetail/BloodStatusSteps";
import { Buttons } from "../../../../components/Buttons";
import { BarcodeWarning } from "../../components/BloodGiveDetail/BarcodeWarning";
import { Modals } from "../../../../components/modal/Modals";
import { BloodBagScanInput } from "../../components/BloodGiveDetail/BloodBagScanInput";
import { useLocation } from "react-router";
import { useStaffOptions } from "../../../Auth/hook/useStaffOptions";

export const MobileBloodGiveDetailPage = () => {
    const { handleSubmit, control } = useForm();
    const [openModal, setOpenModal] = useState<string | null>(null);
    const { staffOptions } = useStaffOptions();
    const location = useLocation();
    const { bb_cross_macth_id } = location.state || {};


    const handleOpen = (modal: string) => {
        setOpenModal(modal);
    };

    const handleClose = () => {
        setOpenModal(null);
    };

    console.log(bb_cross_macth_id)
    return (
        <div>
            <MobilePrivateLayout>
                <div className="flex flex-col gap-2">
                    {patientTransfusion && (
                        <PatientInfoCard
                            data={patientTransfusion.patient}
                            control={control}
                            options={staffOptions}
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
                width="w-[90%]"
                titleClassName="flex text-[#FF7726] text-[0.800rem] justify-center mb-4"
                title="กรุณา Scan Barcode ที่ถุงโลหิตเพื่อตรวจสอบ"
                content={
                    <BloodBagScanInput />
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