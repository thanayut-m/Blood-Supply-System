interface BarcodeWarningProps {
    data: {
        crossMatch: {
            bloodCode: string;
        };
    };
}

export const BarcodeWarning = ({
    data
}: BarcodeWarningProps) => {
    return (
        <div className="relative border border-red-500 rounded-md py-4 px-2 focus-within:ring-2 focus-within:ring-blue-500">
            <label className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-sm text-[#B5B5B5]">สถานะตรวจสอบ</label>
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-2xl text-red-500 tracking-widest">{data.crossMatch.bloodCode}</p>
                <p className="text-sm text-red-500">กรุณาตรวจสอบ Barcode หน้าถุงเลือดก่อนจ่ายโลหิต</p>
            </div>
        </div>
    )
}