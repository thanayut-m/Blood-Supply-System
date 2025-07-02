import donorIcon1 from '../../../../assets/icon/donor_Icon1.png';
import { Inputs } from '../../../../components/MUI/Inputs/Inputs';

export const BloodBagDetails = () => (
    <div className="flex flex-col bg-white rounded-2xl p-3 shadow-xl">
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
                <img src={donorIcon1} className="w-6 h-6 object-contain" alt="Icon" />
                <label className="text-[#B5B5B5] text-sm">รายละเอียดถุงเลือด</label>
            </div>
            <div className="grid grid-cols-12 px- text-[0.600rem] gap-1">
                <div className="col-span-5 text-[#B5B5B5]">เลขที่ถุง <span className="text-black">21066101405</span></div>
                <div className="col-span-2 text-[#B5B5B5]">หมู่เลือด <span className="text-black">O</span></div>
                <div className="col-span-1 text-[#B5B5B5]">Rh <span className="text-black">+</span></div>
                <div className="col-span-3 text-[#B5B5B5]">ปริมาณ (CC) <span className="text-black">450</span></div>
                <div className="col-span-8 text-[#B5B5B5]">ประเภทโลหิต <span className="text-black">Pack Red Call (PRC)</span></div>
                <div className="col-span-4 text-[#B5B5B5]">วันที่เข้ารับ <span className="text-black">02/01/2568</span></div>
                <div className="col-span-8 text-[#B5B5B5]">รับโลหิตจาก <span className="text-black">สภากาชาดไทย</span></div>
                <div className="col-span-4 text-[#B5B5B5]">วันที่พร้อมใช้ <span className="text-black">02/01/2568</span></div>
                <div className="col-span-8"></div>
                <div className="col-span-4 text-[#B5B5B5]">วันหมดอายุ <span className="text-black">02/01/2568</span></div>
            </div>
        </div>
        <div className="flex flex-row gap-1">
            <img src={donorIcon1} className="w-6 h-6 object-contain" alt="Icon" />
            <label className="text-[#B5B5B5] text-sm">รายละเอียดผู้รับโลหิต</label>
        </div>
        <div className="grid grid-cols-12 px-2 text-[0.600rem] gap-1">
            <div className="col-span-8 text-[#B5B5B5]">ชื่อผู้ป่วย <span className="text-black">นายทดสอบระบบ ล็อกอินส์</span></div>
            <div className="col-span-4 text-[#B5B5B5]">HN <span className="text-black">650060141</span></div>
            <div className="col-span-2 text-[#B5B5B5]">หมู่เลือด <span className="text-black">O</span></div>
            <div className="col-span-1 text-[#B5B5B5]">Rh <span className="text-black">+</span></div>
            <div className="col-span-9"></div>
            <div className="col-span-8"></div>
            <div className="col-span-4">
                <Inputs
                    label="วันที่จ่าย"
                    type="text"
                    disabled={true}
                    defaultValue="01/07/2568"
                />
            </div>
        </div>
    </div>
);
