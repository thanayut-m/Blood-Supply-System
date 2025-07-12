import type { BloodStatusStepsProps } from "../../../../types/BloodBankGiveDetail/BloodStatusSteps";

export const BloodStatusSteps = ({
    data
}: BloodStatusStepsProps) => {
    const dataStatus = data.status;
    return (
        <div className="grid grid-cols-4 gap-2 text-center">
            {dataStatus.isConfirmed === "Y" ?
                <div className="bg-blue-200 rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">คล้องโลหิต</p>
                    <p>🔵</p>
                </div> :
                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">คล้องโลหิต</p>
                    <p>⚪</p>
                </div>
            }
            {dataStatus.reportStatus === "Y" ?
                <div className="bg-blue-200 rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">ตรวจสอบ</p>
                    <p>🔵</p>
                </div> :
                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">ตรวจสอบ</p>
                    <p>⚪</p>
                </div>
            }
            {dataStatus.payStatus === "Y" ?
                <div className="bg-blue-200 rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">จ่ายโลหิต</p>
                    <p>🔵</p>
                </div> :
                <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                    <p className="text-black">จ่ายโลหิต</p>
                    <p>⚪</p>
                </div>
            }
            {dataStatus.hasReaction === "Y" ?
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