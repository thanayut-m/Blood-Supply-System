import { useEffect, useState } from "react";
import { RadioBox } from "../../../../../components/Checkbox/RadioBox";
import type { ReactionResponse } from "../../../types/bloodReaction.types";

interface Props {
    data: ReactionResponse;
}

export const ReactionStatusRadio = (
    { data }: Props
) => {
    const [selectedValue, setSelectedValue] = useState<number>(1);

    useEffect(() => {
        if (data?.reactionStatus) {
            console.log(data.reactionStatus)
            setSelectedValue(data.reactionStatus)
        }
    }, [data?.reactionStatus])

    return (
        <div className="relative border border-gray-300 rounded-md py-4 px-2">
            <label className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-sm text-[#B5B5B5]">สถานะ</label>
            <div className="grid grid-cols-3 gap-3">
                <RadioBox
                    label="ปกติ"
                    labelSub="(Normal)"
                    value={1}
                    name="status"
                    checkedValue={selectedValue}
                    onChange={setSelectedValue}
                    color="bg-[#2D63EA]"
                />
                <RadioBox
                    label="ไม่ปกติ"
                    labelSub="(Abnormal)"
                    value={2}
                    name="status"
                    checkedValue={selectedValue}
                    onChange={setSelectedValue}
                    color="bg-[#FF7726]"
                />
                <RadioBox
                    label="ไม่ทราบผล"
                    labelSub="(None)"
                    value={3}
                    name="status"
                    checkedValue={selectedValue}
                    onChange={setSelectedValue}
                    color="bg-[#656565]"
                />
            </div>
        </div>
    )
}
