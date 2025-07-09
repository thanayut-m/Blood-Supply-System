export const BloodStatusSteps = () => {
    return (
        <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-blue-200 rounded-lg px-4 py-2 shadow-xl/25">
                <p className="text-black">คล้องโลหิต</p>
                <p>🔵</p>
            </div>
            <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                <p className="text-[#B5B5B5]">ตรวจสอบ</p>
                <p>⚪</p>
            </div>
            <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                <p className="text-[#B5B5B5]">จ่ายโลหิต</p>
                <p>⚪</p>
            </div>
            <div className="bg-[#ececec] rounded-lg px-4 py-2 shadow-xl/25">
                <p className="text-[#B5B5B5]">ปฏิกิริยา</p>
                <p>⚪</p>
            </div>
        </div>
    )
}