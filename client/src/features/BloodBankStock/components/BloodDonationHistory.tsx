
import { useForm } from "react-hook-form";
import { TableCell } from "@mui/material"
import dayjs from "dayjs";
import { FormInput } from "../../../components/MUI/Inputs/FormInput";
import { StickyTable } from "../../../components/MUI/StickyTable";
import { useBloodBankStock } from "../hook/useBloodBankStock";
import { ControlledAutocomplete } from "../../../components/MUI/Autocomplete";
import { useBloodTypeOption } from "../hook/useBloodTypeOption";

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 20 },
    { id: 'donorNumber', label: 'ประเภท', minWidth: 30 },
    { id: 'fullName', label: 'หมู่เลือด', minWidth: 30 },
    { id: 'age', label: 'Rh', minWidth: 50 },
    { id: 'bloodGroup', label: 'เลขถุง', minWidth: 100 },
    { id: 'rh', label: 'HN', minWidth: 30 },
    { id: 'donationCount', label: 'ชื่อผู้ป่วย', minWidth: 70 },
    { id: 'donationDate', label: 'CrossMacth', minWidth: 150 },
    { id: 'bagNumber', label: 'ผู้จ่าย', minWidth: 150 },
];

export const BloodDonationHistory = () => {
    const { register, watch, control } = useForm({
        defaultValues: {
            startDate: dayjs().format("YYYY-MM-DD"),
            endDate: dayjs().format("YYYY-MM-DD"),
            TypeName: null,
        }
    })
    const startDate = watch("startDate");
    const endDate = watch("endDate");
    const TypeName = watch("TypeName");
    const { data, loading } = useBloodBankStock(startDate, endDate, TypeName)
    const { BloodTypeOption } = useBloodTypeOption()

    if (loading) return <p>กำลังโหลด...</p>;
    return (
        <div className="bg-white p-4 rounded-2xl">
            <p className="my-3 text-2xl">ประวัติการจ่ายเลือด</p>
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-3">
                    <ControlledAutocomplete
                        control={control}
                        name="TypeName"
                        label="ประเภทเลือด"
                        size="small"
                        options={BloodTypeOption}
                    />
                    <FormInput
                        register={register}
                        name="startDate"
                        label="เริ่มต้น"
                        variant="outlined"
                        size="small"
                        type="date"
                        defaultValue={dayjs().format("YYYY-MM-DD")}
                    />
                    <FormInput
                        register={register}
                        name="endDate"
                        label="สิ้นสุด"
                        variant="outlined"
                        size="small"
                        type="date"
                        defaultValue={dayjs().format("YYYY-MM-DD")}
                    />
                </div>
                {data?.success === true && data?.data?.length > 0 ? (
                    <StickyTable
                        columns={columns}
                        rows={data.data}
                        renderRow={(row, index) => (
                            <>
                                <TableCell align="center">{index + 1}</TableCell>
                                <TableCell align="center">{row.bloodTypeSubName}</TableCell>
                                <TableCell align="center">{row.bloodGroupName}</TableCell>
                                <TableCell align="center">{row.rh}</TableCell>
                                <TableCell align="center">{row.bloodCode}</TableCell>
                                <TableCell align="center">{row.hn}</TableCell>
                                <TableCell align="center">{row.patientName}</TableCell>
                                <TableCell align="center">{row.cmResultName}</TableCell>
                                <TableCell align="center">{row.bbCrossPayStaff}</TableCell>
                            </>
                        )}
                    />
                ) : (
                    <div className="text-center text-gray-500 py-10">ไม่มีข้อมูล</div>
                )}
            </div>


        </div>
    )
}