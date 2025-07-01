import { useState } from "react";
import { RadioBox } from "../../../components/Checkbox/RadioBox"
import { MobilePrivateLayout2 } from "../../../layouts/MobilePrivateLayout2"
import { CardTitle } from "./MobileBloodBankReaction/CardTitle"
import { Autocompletes } from "../../../components/MUI/Autocompletes";
import { Inputs } from "../../../components/MUI/Inputs/Inputs";
import { Checkbox } from "../../../components/Checkbox/CheckBox";

export const MobileBloodBankReaction = () => {
    // const { register } = useForm({});
    const [selectedValue, setSelectedValue] = useState('normal');

    return (
        <MobilePrivateLayout2>
            <div className="flex flex-col gap-2">
                <CardTitle />
                <div>
                    <label className="text-[#B5B5B5] text-base"> บันทึกปฏิกิริยาหลังรับเลือด</label>
                    <div className="relative border border-gray-300 rounded-md p-4  focus-within:ring-2 focus-within:ring-blue-500">
                        <label className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-sm text-[#B5B5B5]">
                            สถานะ
                        </label>

                        <div className="grid grid-cols-3 gap-3">
                            <RadioBox
                                label="ปกติ"
                                labelSub="(Normal)"
                                value="normal"
                                name="status"
                                checkedValue={selectedValue}
                                onChange={setSelectedValue}
                                color="bg-[#2D63EA]"
                            />
                            <RadioBox
                                label="ไม่ปกติ"
                                labelSub="(Abnormal)"
                                value="abnormal"
                                name="status"
                                checkedValue={selectedValue}
                                onChange={setSelectedValue}
                                color="bg-[#FF7726]"
                            />
                            <RadioBox
                                label="ไม่ทราบผล"
                                labelSub="(None)"
                                value="none"
                                name="status"
                                checkedValue={selectedValue}
                                onChange={setSelectedValue}
                                color="bg-[#656565]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <Autocompletes
                        label="ความรุนแรง"
                    />
                </div>
                <div className="grid grid-cols-4 gap-1">
                    <Inputs
                        label="ปริมาณรับ (cc)"
                        type="number"
                        defaultValue=""
                    />
                    <Inputs
                        label="เวลาที่ใช้"
                        type="time"
                        defaultValue=""
                    />
                    <Inputs
                        label="เวลามีอาการ"
                        type="time"
                        defaultValue=""
                    />
                    <Inputs
                        label="มีไข้ (อุณหภูมิ)"
                        type="number"
                        defaultValue=""
                    />
                </div>
                <div className="grid grid-cols-5 gap-2">
                    <Checkbox
                        label="หนาวสั่น"
                    />
                    <Checkbox
                        label="มีผื่นแดง"
                    />
                    <Checkbox
                        label="ปวดศีรษะ"
                    />
                    <Checkbox
                        label="คลื่นไส้"
                    />
                    <Checkbox
                        label="อาเจียน"
                    />
                    <Checkbox
                        label="หายใจขัด"
                    />
                    <Checkbox
                        label="ตัวเขียว"
                    />
                    <Checkbox
                        label="Shock"
                    />
                    <Checkbox
                        label="ปวดหลัง"
                    />
                    <Checkbox
                        label="BP ต่ำ"
                    />
                </div>
                <div>หมายเหตุ ยังไม่ได้เริ่ม</div>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-5">
                        <Inputs
                            label="พยาบาลผู้บันทึกผล"
                            type="text"
                            defaultValue="พญ.ทดสอบระบบ ล็อกอินส์"
                        />
                    </div>
                    <div className="col-span-4">
                        <Inputs
                            label="วันที่"
                            type="date"
                        />
                    </div>
                    <div className="col-span-3">
                        <Inputs
                            label="เวลา"
                            type="time"
                        />
                    </div>
                    <div className="col-span-5">
                        <Inputs
                            label="พยาบาลผู้บันทึกผล"
                            type="text"
                            defaultValue="พญ.ทดสอบระบบ ล็อกอินส์"
                        />
                    </div>
                    <div className="col-span-4">
                        <Inputs
                            label="วันที่"
                            type="date"
                        />
                    </div>
                    <div className="col-span-3">
                        <Inputs
                            label="เวลา"
                            type="time"
                        />
                    </div>
                </div>
            </div>
        </MobilePrivateLayout2>
    )
}