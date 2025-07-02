import { RadioBox } from "../../../../components/Checkbox/RadioBox";



interface Props {
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

export const ReactionStatusRadio = ({ selectedValue, setSelectedValue }: Props) => (
    <div className="relative border border-gray-300 rounded-md p-4 focus-within:ring-2 focus-within:ring-blue-500">
        <label className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-sm text-[#B5B5B5]">สถานะ</label>
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
);
