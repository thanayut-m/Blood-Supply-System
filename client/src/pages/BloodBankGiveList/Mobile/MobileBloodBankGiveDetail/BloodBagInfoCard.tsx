import donorIcon1 from '../../../../assets/icon/donor_Icon1.png';

export const BloodBagInfoCard = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4">
                <div className="flex justify-center">
                    <img src={donorIcon1} className="w-full h-full object-contain" alt="Icon" />
                </div>
            </div>
            <div className="col-span-8 flex flex-col gap-1">
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        เลชที่ถุง
                    </p>
                    <p className="col-span-7 text-start">
                        21066101405
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        หมู่เลือด
                    </p>
                    <p className="col-span-7 text-start">
                        O
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        Rh
                    </p>
                    <p className="col-span-7 text-start">
                        +
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ประเภทโลหิต
                    </p>
                    <p className="col-span-7 text-start">
                        Pack Red Call (PRC)
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        วันที่หมดอายุ
                    </p>
                    <p className="col-span-7 text-start">
                        01/03/2568
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ปริมาณ (cc)</p>
                    <p className="col-span-7 text-start">
                        450
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        result
                    </p>
                    <p className="col-span-7 text-start">
                        NEGATVE
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ผู้ทำ
                    </p>
                    <p className="col-span-7 text-start">
                        นายทดสอบระบบ ล็อกอินส์
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        วัน/เวลา ที่ทำ
                    </p>
                    <p className="col-span-7 text-start">
                        01/03/2568 10:00
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ผู้คล้อง
                    </p>
                    <p className="col-span-7 text-start">
                        นายทดสอบระบบ ล็อกอินส์
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        วัน/เวลา คล้อง
                    </p>
                    <p className="col-span-7 text-start">
                        01/03/2568 10:00
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        หมายเหตุ
                    </p>
                    <p className="col-span-7 text-start">
                        -
                    </p>
                </div>
            </div>
        </div>
    )
}