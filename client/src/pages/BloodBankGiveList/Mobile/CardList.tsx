interface CardListProps {
    data: {
        hn: string;
        status: string;
        patient: string;
        bloodType: string;
        bloodCode: string;
        resultCM: string;
        date: string;
        staffname: string;
        hctb: string;
        hcta: string;
    }[];
}

export const CardList = ({ data }: CardListProps) => {
    return (
        <div className="flex flex-col gap-2">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="bg-white shadow-xl rounded-xl p-4 text-sm border-gray-200"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                            <p className="font-semibold text-gray-700">HN:</p>
                            <p className="text-gray-900">{item.hn}</p>
                        </div>
                        <span
                            className={`${item.status === "รอจ่ายเลือด" ? "text-orange-500" : "text-green-500"
                                } font-semibold`}
                        >
                            {item.status}
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
    );
};
