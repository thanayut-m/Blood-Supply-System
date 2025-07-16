import { useForm } from "react-hook-form"
import { FormInputScanV2 } from "../../../../components/inputs/FormInputScanV2"
import type { BloodGiveDetailResponse } from "../../types/transfusion.types"

interface Props {
    data?: BloodGiveDetailResponse
}

export const BloodBagScanInput = (
    { data }: Props
) => {
    const { register, setValue, control, watch } = useForm()

    const watchBloodBagNo = watch("bloodBagNo");
    const watchBagFromTag = watch("bagFromTag");
    const watchHN = watch("hn");

    const isBloodBagMatched =
        data?.crossMatch?.bloodCode &&
        watchBloodBagNo === data.crossMatch.bloodCode;

    const isBagFromTagMatched =
        data?.crossMatch?.bloodCode &&
        watchBagFromTag === data.crossMatch.bloodCode;

    const isHnMatched =
        data?.crossMatch?.crossHN &&
        watchHN === data.crossMatch.crossHN;

    return (
        <form autoComplete="off" className="flex flex-col gap-5">
            <FormInputScanV2
                register={register}
                setValue={setValue}
                control={control}
                name="bloodBagNo"
                type="text"
                label="เลขถุงโลหิต"
                placeholder="ระบุเลขที่ถุงโลหิต จากถุงโลหิต"
                error={!!isBloodBagMatched}
            />

            <FormInputScanV2
                register={register}
                setValue={setValue}
                control={control}
                name="bagFromTag"
                type="text"
                label="เลขถุงจากใบคล้อง"
                placeholder="ระบุเลขที่ถุงโลหิต จากถุงใบคล้อง"
                error={!!isBagFromTagMatched}
            />

            <FormInputScanV2
                register={register}
                setValue={setValue}
                control={control}
                name="hn"
                type="text"
                label="HN"
                placeholder="ระบุเลข HN ผู้รับเลือด จากใบเบิกโลหิต"
                error={!!isHnMatched}
            />
        </form>
    )
}