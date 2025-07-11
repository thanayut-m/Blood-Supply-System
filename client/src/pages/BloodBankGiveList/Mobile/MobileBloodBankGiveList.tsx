import { useEffect, useState } from "react";
import { Modals } from "../../../components/modal/Modals";
import { Buttons } from "../../../components/Buttons";
import { useNavigate } from "react-router";
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout";
import { getAllPatientTransfusions } from "../../../functions/AddPatientTransfusion";
import dayjs from "dayjs";


type TransfusionType = {
    hn: string;
    patient_name: string;
    blood_code: string;
    cm_result_name: string;
    patient_pay_date: string;
    patient_pay_staff_name: string;
    hct: number;
    hct_after: number;
    blood_type_sub_name: string;
    status: string | null;
    patient_pay_status: string
    bb_cross_macth_id: number;
};

export const MobileBloodBankGiveList = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState<string | null>(null);
    const [transfusions, setTransfusions] = useState<TransfusionType[]>([]);
    const [selectRow, setSelectRow] = useState<TransfusionType | null>(null);

    const handleOpen = (modal: string, row: TransfusionType) => {
        setSelectRow(row);
        setOpenModal(modal);
    };
    const handleClose = () => {
        setOpenModal(null);
    };


    const handleGiveBlood = async (actionType: "give" | "reaction") => {
        try {
            if (!selectRow) return;

            if (actionType === "give") {
                navigate("/BloodBankGiveDetail", { state: { bb_cross_macth_id: selectRow.bb_cross_macth_id } });
            } else {
                navigate("/BloodBankReaction");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const allPatientTransfusionsInfo = async () => {
        await getAllPatientTransfusions(setTransfusions)
    }

    useEffect(() => {
        allPatientTransfusionsInfo();
    }, [])

    console.log(transfusions)
    return (
        <div>
            <MobilePrivateLayout>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        {transfusions.map((item, index) => (
                            <div
                                onClick={() => handleOpen("openMenuBloodBank", item)}
                                key={index}
                                className="bg-white shadow-xl rounded-xl p-4 text-sm border-gray-200"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-1">
                                        <p className="font-semibold text-gray-700">HN:</p>
                                        <p className="text-gray-900">{item.hn ? item.hn : "-"}</p>
                                    </div>
                                    <span
                                        className={`${item.patient_pay_status !== "Y" ? "text-orange-500" : "text-green-500"
                                            } font-semibold`}
                                    >
                                        {item.patient_pay_status !== "Y" ? "รอจ่ายเลือด" : "จ่ายเลือดแล้ว"}
                                    </span>
                                </div>

                                <div className="flex space-x-1">
                                    <p className="font-semibold text-gray-700">ชื่อ-สกุล:</p>
                                    <p className="text-gray-900">{item.patient_name ? item.patient_name : "-"}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-x-4 text-gray-700">
                                    <div>
                                        <span className="font-semibold">ประเภทเลือด:</span>{" "}
                                        <span className="text-gray-900">{item.blood_type_sub_name ? item.blood_type_sub_name : "-"}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">ถุงเลือด:</span>{" "}
                                        <span className="text-gray-900">{item.blood_code ? item.blood_code : "-"}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <div>
                                            <span className="font-semibold">ผล Cross Match:</span>{" "}
                                            <span className="text-gray-900">{item.cm_result_name ? item.cm_result_name : "-"}</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold">วันที่ให้เลือด :</span>{" "}
                                            <span className="text-gray-900">{item.patient_pay_date ? dayjs(item.patient_pay_date).format("DD/MM/YYYY") : "-"}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="font-semibold">ผู้ให้เลือด:</span>{" "}
                                        <span className="text-gray-900">{item.patient_pay_staff_name ? item.patient_pay_staff_name : "-"}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-x-4 text-gray-700 mt-2">
                                    <div>
                                        <span className="font-semibold">HCT ก่อน:</span>{" "}
                                        <span className="text-gray-900">{item.hct ? item.hct : "-"}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">HCT หลัง:</span>{" "}
                                        <span className="text-gray-900">{item.hct_after ? item.hct_after : "-"}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MobilePrivateLayout>

            {
                selectRow && (
                    <Modals
                        open={openModal === "openMenuBloodBank"}
                        onClose={handleClose}
                        width="w-[80%]"
                        infoList={[
                            { label: "HN", value: selectRow.hn },
                            { label: "ชื่อ", value: selectRow.patient_name },
                            { label: "ถุงเลือด", value: selectRow.blood_code },
                        ]}
                        content={
                            <div className="flex flex-col gap-3">
                                <Buttons
                                    variant="info"
                                    className="text-black bg-[#3abff8] py-2 rounded-4xl"
                                    onClick={() => handleGiveBlood("give")}
                                >
                                    ให้เลือดคนไข้
                                </Buttons>
                                <Buttons
                                    className="text-black bg-[#37cdbe] py-2 rounded-4xl"
                                    onClick={() => handleGiveBlood("reaction")}
                                >
                                    ปฏิกิริยารับเลือด
                                </Buttons>
                            </div>
                        }
                        actions={
                            <Buttons
                                variant="error"
                                className="text-white bg-red-500 py-2 rounded-4xl mt-4"
                                onClick={handleClose}
                            >
                                ยกเลิก
                            </Buttons>
                        }
                    />
                )
            }

        </div >
    )
}
