import dayjs from 'dayjs';
import donorIcon1 from '../../../../assets/icon/donor_Icon1.png';
import type { CrossMatchResponse } from '../../types/transfusion.types';

interface Props {
    data: CrossMatchResponse
}

export const BloodBagInfoCard = ({
    data
}: Props) => {
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
                        {data.bloodCode ? data.bloodCode : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        หมู่เลือด
                    </p>
                    <p className="col-span-7 text-start">
                        {data.crossBloodGroup ? data.crossBloodGroup : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        Rh
                    </p>
                    <p className="col-span-7 text-start">
                        {data.crossRh ? data.crossRh : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ประเภทโลหิต
                    </p>
                    <p className="col-span-7 text-start">
                        {data.bloodType ? data.bloodType : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        วันที่หมดอายุ
                    </p>
                    <p className="col-span-7 text-start">
                        {data.expireDate ?
                            dayjs(data.expireDate).format("DD/MM/YYYY") : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ปริมาณ (cc)</p>
                    <p className="col-span-7 text-start">
                        {data.volumeCC ? data.volumeCC : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        result
                    </p>
                    <p className="col-span-7 text-start">
                        {data.cmResult ? data.cmResult : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ผู้ทำ
                    </p>
                    <p className="col-span-7 text-start">
                        {data.crossMatchBy ? data.crossMatchBy : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        วัน/เวลา ที่ทำ
                    </p>
                    <p className="col-span-7 text-start">
                        {data.crossMatchDate ? dayjs(data.crossMatchDate).format("DD/MM/YYYY") : "-"}&nbsp;
                        {data.crossMatchTime ? data.crossMatchTime : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ผู้คล้อง
                    </p>
                    <p className="col-span-7 text-start">
                        {data.confirmBy ? data.confirmBy : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        วัน/เวลา คล้อง
                    </p>
                    <p className="col-span-7 text-start">
                        {data.confirmDate ? dayjs(data.confirmDate).format("DD/MM/YYYY") : "-"}&nbsp;
                        {data.confirmTime ? data.confirmTime : "-"}
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