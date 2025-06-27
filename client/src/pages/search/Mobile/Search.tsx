import { useForm } from "react-hook-form";
import { Buttons } from "../../../components/Buttons";
import { FormInput } from "../../../components/inputs/FormInput";
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout";
import { AiOutlineScan } from "react-icons/ai";
import { FormSelect } from "../../../components/Select/FormSelect";
import { FormMyDatePicker } from "../../../components/dates/FormMyDatePicker";
import { format } from "date-fns";

type FormData = {
    startDate?: Date;
    endDate?: Date;
    search?: string;
};

export const Search = () => {
    const { register, control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            startDate: new Date(),
            endDate: new Date(),
        },
    });

    const onSaveSearch = async (data: FormData) => {
        try {
            const formattedStartDate = data.startDate ? format(data.startDate, "yyyy-MM-dd") : "";
            const formattedEndDate = data.endDate ? format(data.endDate, "yyyy-MM-dd") : "";

            console.log({
                formattedStartDate,
                formattedEndDate,
                search: data.search,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <MobilePrivateLayout>
            <div className="flex flex-col">
                <FormMyDatePicker control={control} name="startDate" label="วันที่เริ่มต้น" />
                <FormMyDatePicker control={control} name="endDate" label="วันที่สิ้นสุด" />

                <FormSelect label="จุดขอ" />
                <FormSelect label="Ward" />

                <div className="col-span-10">
                    <FormInput register={register} name="search" type="text" label="ค้นหา" placeholder="Search...." />
                </div>

                <div className="flex flex-col gap-2 mt-2">
                    <Buttons variant="info" className="w-full flex justify-center items-center h-[42px]">
                        <AiOutlineScan className="text-2xl text-white" />
                    </Buttons>
                    <Buttons onClick={handleSubmit(onSaveSearch)} variant="info">
                        ค้นหา
                    </Buttons>
                </div>
            </div>
        </MobilePrivateLayout>
    );
};
