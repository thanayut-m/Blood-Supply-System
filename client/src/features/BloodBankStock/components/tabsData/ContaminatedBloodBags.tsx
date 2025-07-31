import { TableCell } from "@mui/material";
import { StickyTable } from "../../../../components/MUI/StickyTable";
import { useBloodBankStock } from "../../hook/useBloodBankStock";
import dayjs from "dayjs";

const columns = [
    { label: "ลำดับ", id: "1", minWidth: 10, fontSize: "12px" },
    { label: "ประเภท", id: "2", minWidth: 10, fontSize: "12px" },
    { label: "เลขถุง", id: "3", fontSize: "12px" },
    { label: "ml", id: "4", fontSize: "12px" },
    { label: "วันหมดอายุ", id: "5", minWidth: 100, fontSize: "12px" },
];

interface ContaminatedBloodBagsProps {
    selectedGroupLabel: string;
}

export const ContaminatedBloodBags = ({ selectedGroupLabel }: ContaminatedBloodBagsProps) => {
    const { dataContaminatedBloodBags, loading } = useBloodBankStock(null, null, null, selectedGroupLabel);

    if (loading) return <p>กำลังโหลด...</p>;
    return (
        <StickyTable
            columns={columns}
            rows={dataContaminatedBloodBags}
            renderRow={(row, index) => (
                <>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {index + 1}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.bloodTypeName ? row.bloodTypeName : "-"}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.bloodCode ? row.bloodCode : "-"}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.bloodCC ? row.bloodCC : "-"}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.bloodExpireDate ? dayjs(row.bloodExpireDate).format("DD-MM-YYYY") : "-"}
                    </TableCell>

                </>
            )}
        />
    )
}