import { useForm } from "react-hook-form";
import { Buttons } from "../../../components/Buttons";
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout";
import { FormSelect } from "../../../components/Select/FormSelect";
import { FormMyDatePicker } from "../../../components/dates/FormMyDatePicker";
import { format } from "date-fns";
import { FormInputScan } from "../../../components/inputs/FormInputScan";

type FormData = {
    startDate?: Date;
    endDate?: Date;
    search?: string;
    s_department?: string
    s_ward?: string
    test?: string
};

export const MobileSearch = () => {
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
                s_department: data.s_department,
                s_ward: data.s_ward
            });
        } catch (error) {
            console.error(error);
        };
    }

    const dataDepartment = [
        { value: "1", name: "Department 1" },
        { value: "2", name: "Department 2" },
        { value: "3", name: "Department 3" },
        { value: "4", name: "Department 4" },
        { value: "5", name: "Department 5" },
    ];

    const dataWard = [
        { value: "1", name: "Ward 1" },
        { value: "2", name: "Ward 2" },
        { value: "3", name: "Ward 3" },
        { value: "4", name: "Ward 4" },
        { value: "5", name: "Ward 5" },
    ];

    return (
        <MobilePrivateLayout>
            <div className="flex flex-col">
                <FormMyDatePicker control={control} name="startDate" label="วันที่เริ่มต้น" />
                <FormMyDatePicker control={control} name="endDate" label="วันที่สิ้นสุด" />

                <FormSelect
                    register={register}
                    name="s_department"
                    data={dataDepartment}
                    label="จุดขอ"

                />
                <FormSelect
                    register={register}
                    name="s_ward"
                    data={dataWard}
                    label="Ward"
                />

                <FormInputScan
                    register={register}
                    name="test"
                    label="ค้นหา"
                    placeholder="Search...."
                />
                <div className="flex flex-col gap-2 mt-2">
                    <Buttons onClick={handleSubmit(onSaveSearch)} variant="info">
                        ค้นหา
                    </Buttons>
                </div>
            </div>
        </MobilePrivateLayout>
    );
};
