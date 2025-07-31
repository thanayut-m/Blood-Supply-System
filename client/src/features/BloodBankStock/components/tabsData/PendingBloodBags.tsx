import { TableCell } from "@mui/material";
import { StickyTable } from "../../../../components/MUI/StickyTable";
import { useBloodBankStock } from "../../hook/useBloodBankStock";

const columns = [
    { label: "ลำดับ", id: 1, minWidth: 10, fontSize: "12px" },
    { label: "ประเภท", id: 2, fontSize: "12px" },
    { label: "เลขถุง", id: 3, fontSize: "12px" },
    { label: "วันคล้อง", id: 4, minWidth: 80, fontSize: "12px" },
    { label: "HN", id: 5, minWidth: 90, fontSize: "12px" },
    { label: "ชื่อผู้ป่วย", id: 6, minWidth: 170, fontSize: "12px" },
];

interface PendingBloodBagsProps {
    selectedGroupLabel: string;
}

export const PendingBloodBags = ({ selectedGroupLabel }: PendingBloodBagsProps) => {
    const { dataPendingBloodBags, loading } = useBloodBankStock(null, null, null, selectedGroupLabel);
    if (loading) return <p>กำลังโหลด...</p>;
    return (
        <StickyTable
            columns={columns}
            rows={dataPendingBloodBags}
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
                        {row.daysUntilExpire ? row.daysUntilExpire : "-"}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.hn}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.patientName ? row.patientName : "-"}
                    </TableCell>
                </>
            )}
        />
    )
}