
import { Buttons } from "../../../../../components/Buttons"

interface Props {
    onClick: () => void;
    onGiveBlood: (actionType: "give" | "reaction") => void;
}

export const GiveBloodMenu = (
    { onClick, onGiveBlood }: Props
) => {
    return (
        <div className="flex flex-col gap-3">
            <Buttons
                variant="info"
                className="text-black bg-[#3abff8] py-2 rounded-4xl"
                onClick={() => onGiveBlood("give")}
            >
                ให้เลือดคนไข้
            </Buttons>
            <Buttons
                className="text-black bg-[#37cdbe] py-2 rounded-4xl"
                onClick={() => onGiveBlood("reaction")}
            >
                ปฏิกิริยารับเลือด
            </Buttons>
            <Buttons
                variant="error"
                className="text-white bg-red-500 py-2 rounded-4xl mt-4"
                onClick={onClick}
            >
                ยกเลิก
            </Buttons>
        </div>
    )
}