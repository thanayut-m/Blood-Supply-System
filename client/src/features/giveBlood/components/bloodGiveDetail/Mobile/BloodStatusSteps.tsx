import type { StatusResponse } from "../../../types/transfusion.types";

interface Props {
    data: StatusResponse
}

export const BloodStatusSteps = ({
    data
}: Props) => {
    return (
        <div className="grid grid-cols-4 gap-2 text-center">
            {data.isConfirmed === "Y" ?
                <div className="bg-blue-200 rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">คล้องโลหิต</p>
                    <p>🔵</p>
                </div> :
                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">คล้องโลหิต</p>
                    <p>⚪</p>
                </div>
            }
            {data.reportStatus === "Y" ?
                <div className="bg-blue-200 rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">ตรวจสอบ</p>
                    <p>🔵</p>
                </div> :
                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">ตรวจสอบ</p>
                    <p>⚪</p>
                </div>
            }
            {data.payStatus === "Y" ?
                <div className="bg-blue-200 rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">จ่ายโลหิต</p>
                    <p>🔵</p>
                </div> :
                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">จ่ายโลหิต</p>
                    <p>⚪</p>
                </div>
            }
            {data.hasReaction === "Y" ?
                <div className="bg-blue-200 rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">ปฏิกิริยา</p>
                    <p>🔵</p>
                </div> :
                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">ปฏิกิริยา</p>
                    <p>⚪</p>
                </div>
            }
        </div>
    )
}