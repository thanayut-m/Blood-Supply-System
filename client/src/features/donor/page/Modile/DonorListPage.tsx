import { TableCell } from "@mui/material";
import { StickyTable } from "../../../../components/MUI/StickyTable";
import { DesktopPrivateLayout } from "../../../../layouts/DesktopPrivateLayout"
import { FormInput } from "../../../../components/MUI/Inputs/FormInput";
import { useForm } from "react-hook-form";
import { useDonor } from "../../hook/useDonor";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import type { getDonorListResponse } from "../../types/donor.type";

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 20 },
    { id: 'donorNumber', label: 'เลขผู้บริจาค', minWidth: 30 },
    { id: 'fullName', label: 'ชื่อ-นามสกุล', minWidth: 230 },
    { id: 'age', label: 'อายุ', minWidth: 50 },
    { id: 'bloodGroup', label: 'หมู่เลือด', minWidth: 100 },
    { id: 'rh', label: 'Rh', minWidth: 30 },
    { id: 'donationCount', label: 'ครั้งที่', minWidth: 70 },
    { id: 'donationDate', label: 'วันที่', minWidth: 150 },
    { id: 'bagNumber', label: 'เลขถุง', minWidth: 150 },
    { id: 'idCard', label: 'เลขบัตรประชาชน', minWidth: 150 },
    { id: 'phone', label: 'โทร', minWidth: 150 },
    { id: 'reactive', label: 'Reactive', minWidth: 150 },
    { id: 'donationPlace', label: 'สถานที่บริจาค', minWidth: 150 },
    { id: 'address', label: 'ที่อยู่', minWidth: 300 },
    { id: 'recorder', label: 'ผู้บันทึก', minWidth: 150 },
    { id: 'aboDiscrepancy', label: 'ABO Discrepancy', minWidth: 150 },
];


export const DonorListPage = () => {
    const { register, watch } = useForm();
    const search = watch('search')
    const [debouncedSearch, setDebouncedSearch] = useState('');
    useEffect(() => {
        document.title = "ทะเบียนผู้บริจาคเลือด || Logins Medical";
    }, [])


    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
        }, 100);
        return () => clearTimeout(timeout);
    }, [search]);

    const { data }: { data?: getDonorListResponse } = useDonor(debouncedSearch);
    return (
        <DesktopPrivateLayout>
            <div className="p-4 bg-white rounded-2xl ">
                <p className="text-2xl mb-4">ทะเบียนผู้บริจาคเลือด</p>
                <div className="flex flex-row justify-end mb-5 ">
                    <FormInput
                        register={register}
                        name="search"
                        label="ค้นหา"
                        variant="outlined"
                        size="small"
                    />
                </div>
                <StickyTable<getDonorListResponse>
                    columns={columns}
                    rows={Array.isArray(data) ? data : []}
                    renderRow={(row, index) => (
                        <>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell>{row.donorCode}</TableCell>
                            <TableCell>{row.donorName}</TableCell>
                            <TableCell align="center">{row.donorAge}</TableCell>
                            <TableCell align="center">{row.bloodGroupName}</TableCell>
                            <TableCell align="center">{row.rh}</TableCell>
                            <TableCell align="center">{row.donateNo}</TableCell>
                            <TableCell align="center">{dayjs(row.visitDate).format('YYYY-MM-DD')}</TableCell>
                            <TableCell>{row.bloodCode}</TableCell>
                            <TableCell>{row.cId}</TableCell>
                            <TableCell>{row.telePhone}</TableCell>
                            <TableCell align="center">{row.reactive}</TableCell>
                            <TableCell align="center">{row.bbDonorResourceName}</TableCell>
                            <TableCell>{row.addrpart}</TableCell>
                            <TableCell align="center">{row.staffName}</TableCell>
                            <TableCell align="center">{row.aboDiscrepancy}</TableCell>
                        </>
                    )}
                />
            </div>
        </DesktopPrivateLayout>
    );
};
