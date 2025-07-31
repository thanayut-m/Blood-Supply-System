import { TableCell } from "@mui/material";
import { StickyTable } from "../../../../components/MUI/StickyTable";
import { useBloodBankStock } from "../../hook/useBloodBankStock";
import dayjs from "dayjs";

const columns = [
    { label: "ลำดับ", id: 1, minWidth: 10, fontSize: "12px" },
    { label: "ประเภท", id: 2, fontSize: "12px" },
    { label: "เลขถุง", id: 3, fontSize: "12px" },
    { label: "วันหมดอายุ", id: 4, minWidth: 110, fontSize: "12px" },
    { label: "วันปลดถุง", id: 5, minWidth: 110, fontSize: "12px" },
    { label: "HN", id: 6, minWidth: 78, fontSize: "12px" },
    { label: "ชื่อผู้ป่วย", id: 7, minWidth: 170, fontSize: "12px" },
];
interface DeliveredBloodBagsProps {
    selectedGroupLabel: string;
}

export const DeliveredBloodBags = ({ selectedGroupLabel }: DeliveredBloodBagsProps) => {
    const { dataDeliveredBloodBags, loading } = useBloodBankStock(null, null, null, selectedGroupLabel);

    if (loading) return <p>กำลังโหลด...</p>;
    return (
        <StickyTable
            columns={columns}
            rows={dataDeliveredBloodBags}
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
                        {row.bloodExpireDate ? dayjs(row.bloodExpireDate).format("DD-MM-YYYY") : "-"}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.bbSupplyDate ? dayjs(row.bbSupplyDate).format("DD-MM-YYYY") : "-"}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.hn ? row.hn : "-"}
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