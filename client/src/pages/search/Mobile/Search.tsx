import { useForm } from "react-hook-form"
import { Buttons } from "../../../components/Buttons"
import { FormInput } from "../../../components/inputs/FormInput"
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout"
import { AiOutlineScan } from "react-icons/ai";
import { FormSelect } from "../../../components/Select/FormSelect"
import { FormMyDatePicker } from "../../../components/dates/FormMyDatePicker";

export const Search = () => {
    const { register } = useForm({});
    return (
        <MobilePrivateLayout>
            <div className="flex flex-col">
                <FormMyDatePicker
                    label="วันที่เริ่ม"
                />

                <FormMyDatePicker
                    label="วันที่สิ้นสุด"
                />

                <FormSelect
                    label="จุดขอ"
                />

                <FormSelect
                    label="Ward"
                />

                <div className="col-span-10">
                    <FormInput
                        register={register}
                        name="search"
                        type="text"
                        label="ค้นหา"
                        placeholder="Search...."
                    />
                </div>

                <div className="flex flex-col gap-2 mt-2">
                    <Buttons variant="info" className="w-full flex justify-center items-center h-[42px]">
                        <AiOutlineScan className="text-2xl text-white" />
                    </Buttons>
                    <Buttons variant="info">
                        ค้นหา
                    </Buttons>
                </div>
            </div>

        </MobilePrivateLayout>
    )
}