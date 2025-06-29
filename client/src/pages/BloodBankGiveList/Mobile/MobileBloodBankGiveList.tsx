import { useState } from "react";
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout"
import { Modals } from "../../../components/modal/Modals";
import { Buttons } from "../../../components/Buttons";

export const MobileBloodBankGiveList = () => {
    const [openModal, setOpenModal] = useState(null);
    const [selectRow, setSelectRow] = useState<typeof data[0] | null>(null)

    const handleOpen = (modal: string, row: typeof data[0]) => {
        setSelectRow(row);
        setOpenModal(modal);
    };
    const handleClose = () => {
        setOpenModal(null);
    };

    const data = [
        { hn: "85652466", status: "Y", patient: "นาย ทดสอบ ทดสอบ1", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" },
        { hn: "85652466", status: null, patient: "นาย ทดสอบ ทดสอบ2", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" },
        { hn: "85652466", status: null, patient: "นาย ทดสอบ ทดสอบ3", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" },
        { hn: "85652466", status: "จ่ายเลือดแล้ว", patient: "นาย ทดสอบ ทดสอบ", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" },
        { hn: "85652466", status: null, patient: "นาย ทดสอบ ทดสอบ5", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" }
    ]

    return (
        <div>
            <MobilePrivateLayout>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        {data.map((item, index) => (
                            <div
                                onClick={() => handleOpen("openMenuBloodBank", item)}
                                key={index}
                                className="bg-white shadow-xl rounded-xl p-4 text-sm border-gray-200"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-1">
                                        <p className="font-semibold text-gray-700">HN:</p>
                                        <p className="text-gray-900">{item.hn}</p>
                                    </div>
                                    <span
                                        className={`${item.status === null ? "text-orange-500" : "text-green-500"
                                            } font-semibold`}
                                    >
                                        {item.status === "Y" ? "จ่ายเลือดแล้ว" : "รอจ่ายเลือด"}
                                    </span>
                                </div>

                                <div className="flex space-x-1">
                                    <p className="font-semibold text-gray-700">ชื่อ-สกุล:</p>
                                    <p className="text-gray-900">{item.patient}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-x-4 text-gray-700">
                                    <div>
                                        <span className="font-semibold">ประเภทเลือด:</span>{" "}
                                        <span className="text-gray-900">{item.bloodType}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">ถุงเลือด:</span>{" "}
                                        <span className="text-gray-900">{item.bloodCode}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <div>
                                            <span className="font-semibold">ผล Cross Match:</span>{" "}
                                            <span className="text-gray-900">{item.resultCM}</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold">วันที่ให้เลือด :</span>{" "}
                                            <span className="text-gray-900">{item.date}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="font-semibold">ผู้ให้เลือด:</span>{" "}
                                        <span className="text-gray-900">{item.staffname}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-x-4 text-gray-700 mt-2">
                                    <div>
                                        <span className="font-semibold">HCT ก่อน:</span>{" "}
                                        <span className="text-gray-900">{item.hctb}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">HCT หลัง:</span>{" "}
                                        <span className="text-gray-900">{item.hcta}</span>
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
                        title="เมนู"
                        infoList={[
                            { label: "HN", value: selectRow.hn },
                            { label: "ชื่อ", value: selectRow.patient },
                        ]}
                        content={
                            <div className="flex flex-col gap-3">
                                <Buttons
                                    variant="info"
                                    className="text-black"
                                >
                                    ให้เลือดคนไข้
                                </Buttons>
                                <Buttons
                                    variant="accent"
                                    className="text-black"
                                >
                                    ปฏิกิริยารับเลือด
                                </Buttons>
                            </div>
                        }
                        actions={
                            <Buttons
                                variant="error"
                                className="text-black"
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
