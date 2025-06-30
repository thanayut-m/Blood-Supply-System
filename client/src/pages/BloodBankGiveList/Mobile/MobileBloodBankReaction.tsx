import { useState } from "react";
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout"
import { Input } from "../../../components/inputs/Input";
import { useForm } from "react-hook-form";
import { FormInput } from "../../../components/inputs/FormInput";
import { RadioBox } from './../../../components/Checkbox/RadioBox';
import { Checkbox } from "../../../components/Checkbox/Checkbox";
import { Buttons } from "../../../components/Buttons";

export const MobileBloodBankReaction = () => {
    const { register } = useForm({});
    const [selected, setSelected] = useState("");
    return (
        <MobilePrivateLayout>
            <div className="flex flex-col gap-2">
                <div className="p-4 bg-white rounded-lg shadow-md text-gray-800 space-y-3">
                    <div className="text-lg font-bold">รายละเอียดถุงโลหิต</div>
                    <div className="grid grid-cols-2 text-sm">
                        <div className="col-span-2 ">
                            เลขที่ถุง: <span className="font-medium">1254213598753</span>
                        </div>
                        <div className="col-span-1">
                            ปริมาณ: <span className="font-medium">250 CC</span>
                        </div>
                        <div>
                            หมู่เลือด: <span className="font-medium">O</span>
                        </div>
                        <div>
                            Rh: <span className="font-medium">+</span>
                        </div>
                        <div>
                            ประเภทโลหิต: <span className="font-medium">PRC</span>
                        </div>
                        <div className="col-span-2 ">
                            วันที่รับเข้า: <span className="font-medium">2025-06-30</span>
                        </div>
                        <div className="col-span-2 ">
                            รับโลหิตจาก: <span className="font-medium">โรงพยาบาลไทยมาก</span>
                        </div>
                        <div className="col-span-2 ">
                            วันที่พร้อมใช้: <span className="font-medium">2025-06-30</span>
                        </div>
                        <div className="col-span-2 ">
                            วันที่หมดอายุ: <span className="font-medium">2025-06-30</span>
                        </div>
                        <div className="col-span-2 ">
                            หมายเหตุ: <span className="font-medium">ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ</span>
                        </div>
                    </div>
                </div>

                <div className="p-2 bg-white rounded-lg shadow-md space-y-3 text-gray-800">
                    <div className="text-lg font-bold">รายละเอียดปฏิกิริยาหลังรับเลือด</div>
                    <div className="grid grid-cols-2 text-sm">
                        <div className="col-span-1 ">
                            วันที่จ่ายโลหิต : <span className="font-medium">2025-06-30</span>
                        </div>
                        <div className="col-span-1 ">
                            หมู่เลือด : <span className="font-medium">2025-06-30</span>
                        </div>
                        <div className="col-span-1 ">
                            Rh : <span className="font-medium">2025-06-30</span>
                        </div>
                        <div className="col-span-1 ">
                            HN : <span className="font-medium">2025-06-30</span>
                        </div>
                        <div className="col-span-1 ">
                            ชื่อผู้ป่วย : <span className="font-medium">2025-06-30</span>
                        </div>
                        <div className="col-span-2 ">
                            ความรุนแรง : <span className="font-medium">2025-06-30</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3" >
                        <RadioBox label="ปกติ" name="bloodStatus" value="normal" checkedValue={selected} onChange={setSelected} />
                        <RadioBox label="ไม่ปกติ" name="bloodStatus" value="abnormal" checkedValue={selected} onChange={setSelected} />
                        <RadioBox label="ไม่ทราบผล" name="bloodStatus" value="pending" checkedValue={selected} onChange={setSelected} />
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                        <FormInput
                            register={register}
                            name="test"
                            type="number"
                            label="ปริมาณโลหิตที่รับ"
                            placeholder="กี่ CC"
                        />
                        <FormInput
                            register={register}
                            name="test"
                            type="time"
                            label="เวลาที่ให้"
                        />
                        <FormInput
                            register={register}
                            name="test"
                            type="time"
                            label="เวลามีอาการ"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <Checkbox label="มีไข้" />
                        <div className="w-full">
                            <Input
                                register={register}
                                name="test"
                                type="number"
                                placeholder="กี่องศา"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <Checkbox label="หนาวสั่น" />
                        <Checkbox label="มีผื่นแดง" />
                        <Checkbox label="ปวกศีรษะ" />
                        <Checkbox label="BP ต่ำ" />
                        <Checkbox label="คลื่นไส้" />
                        <Checkbox label="อาเจียน" />
                        <Checkbox label="ปวดหลัง" />
                        <Checkbox label="หายใจขัด" />
                        <Checkbox label="ตัวเขียว" />
                        <Checkbox label="Shock" />
                        <div className="col-span-2 ">
                            <div className="flex flex-row gap-2">
                                <Checkbox label="อื่นๆ" />
                                <Input
                                    register={register}
                                    name="test"
                                    type="text"
                                    placeholder="อื่นๆ"
                                />
                            </div>
                        </div>
                    </div>
                    <Buttons variant="info">บันทึก</Buttons>
                </div>

            </div>
        </MobilePrivateLayout>
    )
}