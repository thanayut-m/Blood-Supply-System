import { FromRadiosGroup } from "../../../components/MUI/Checkbox/FromRadiosGroup "
import { MobilePrivateLayout2 } from "../../../layouts/MobilePrivateLayout2"
import { CardTitle } from "./MobileBloodBankReaction/CardTitle"

export const MobileBloodBankReaction = () => {
    // const { register } = useForm({});
    return (
        <MobilePrivateLayout2>
            <div className="flex flex-col gap-2">
                <CardTitle />
                <label className="text-[#B5B5B5] text-base"> บันทึกปฏิกิริยาหลังรับเลือด</label>
                <div className="bg-white">
                    <div className="grid grid-cols-3 gap-3">
                        <FromRadiosGroup />
                    </div>

                </div>
            </div>
        </MobilePrivateLayout2>
    )
}