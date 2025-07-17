import { Inputs } from '../../../../../components/MUI/Inputs/Inputs';
import donorIcon1 from '../../../../../assets/icon/donor_Icon1.png';
import donorIcon2 from '../../../../../assets/icon/donor_Icon2.png';
import dayjs from 'dayjs';
import type {
    BloodBagResponse,
    CrossMatchResponse
} from '../../../types/bloodReaction.types';


interface Props {
    data: {
        bloodBag: BloodBagResponse;
        crossMatch: CrossMatchResponse
    }
}

export const BloodBagDetails = (
    { data }: Props
) => {
    return (
        <div className="flex flex-col bg-white rounded-2xl p-3 shadow-xl/25">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center">
                    <img src={donorIcon1} className="w-6 h-6 object-contain" alt="Icon" />
                    <label className="text-[#B5B5B5] text-sm">รายละเอียดถุงเลือด</label>
                </div>
                <div className="grid grid-cols-12  text-[0.600rem] gap-1 px-6">
                    <div className="col-span-5 text-[#B5B5B5]">เลขที่ถุง <span className="text-black">{data?.bloodBag?.bloodCode ? data?.bloodBag?.bloodCode : "-"}</span></div>
                    <div className="col-span-2 text-[#B5B5B5]">หมู่เลือด <span className="text-black">{data?.bloodBag?.groupName ? data?.bloodBag?.groupName : "-"}</span></div>
                    <div className="col-span-1 text-[#B5B5B5]">Rh <span className="text-black">{data?.bloodBag?.rh ? data?.bloodBag?.rh : "-"}</span></div>
                    <div className="col-span-3 text-[#B5B5B5]">ปริมาณ (CC) <span className="text-black">{data?.bloodBag?.ccBalance ? data?.bloodBag?.ccBalance : "-"}</span></div>
                    <div className="col-span-8 text-[#B5B5B5]">ประเภทโลหิต <span className="text-black">{data?.bloodBag?.typeName ? data?.bloodBag?.typeName : "-"}</span></div>
                    <div className="col-span-4 text-[#B5B5B5]">วันที่เข้ารับ <span className="text-black">{data?.bloodBag?.receiveDate ? dayjs(data?.bloodBag?.receiveDate).format("DD/MM/YYYY") : "-"}</span></div>
                    <div className="col-span-8 text-[#B5B5B5]">รับโลหิตจาก <span className="text-black">{data?.bloodBag?.resourceName ? data?.bloodBag?.resourceName : "-"}</span></div>
                    <div className="col-span-4 text-[#B5B5B5]">วันที่พร้อมใช้ <span className="text-black">{data?.bloodBag?.readyDate ? dayjs(data?.bloodBag?.readyDate).format("DD/MM/YYYY") : "-"}</span></div>
                    <div className="col-span-8"></div>
                    <div className="col-span-4 text-[#B5B5B5]">วันหมดอายุ <span className="text-black">{data?.bloodBag?.expireDate ? dayjs(data?.bloodBag?.expireDate).format("DD/MM/YYYY") : "-"}</span></div>
                </div>
            </div>
            <div className="flex flex-row gap-1 items-center">
                <img src={donorIcon2} className="w-6 h-6 object-contain" alt="Icon" />
                <label className="text-[#B5B5B5] text-sm">รายละเอียดผู้รับโลหิต</label>
            </div>
            <div className="grid grid-cols-12 px-6 text-[0.600rem] gap-1 mt-2">
                <div className="col-span-8 text-[#B5B5B5]">ชื่อผู้ป่วย <span className="text-black">{data?.crossMatch?.patientName ? data?.crossMatch?.patientName : "-"}</span></div>
                <div className="col-span-4 text-[#B5B5B5]">HN <span className="text-black">{data?.crossMatch?.hn ? data?.crossMatch?.hn : "-"}</span></div>
                <div className="col-span-2 text-[#B5B5B5]">หมู่เลือด <span className="text-black">{data?.crossMatch?.bloodGroupName ? data?.crossMatch?.bloodGroupName : "-"}</span></div>
                <div className="col-span-1 text-[#B5B5B5]">Rh <span className="text-black">{data?.crossMatch?.rh ? data?.crossMatch?.rh : "-"}</span></div>
                <div className="col-span-9"></div>
                <div className="col-span-8"></div>
                <div className="col-span-4">
                    <Inputs
                        label="วันที่จ่าย"
                        type="text"
                        disabled={true}
                        defaultValue={
                            data?.crossMatch?.patientPayDate
                                ? dayjs(data.crossMatch.patientPayDate).format("DD/MM/YYYY")
                                : "-"
                        }
                    />
                </div>
            </div>
        </div>
    )
}
