import { MobilePrivateLayout } from "../../../../../layouts/MobilePrivateLayout"

export const MobileGiveBloodListForm = () => {
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
        </div>
    )
}