import { TableCell } from "@mui/material";
import { StickyTable } from "../../../../components/MUI/StickyTable";
import { useBloodBankStock } from './../../hook/useBloodBankStock';
import dayjs from "dayjs";

const columns = [
    { label: "ลำดับ", id: 1, minWidth: 10, fontSize: "12px" },
    { label: "ประเภท", id: 2, fontSize: "12px" },
    { label: "เลขถุง", id: 3, fontSize: "12px" },
    { label: "ml", id: 4, fontSize: "12px" },
    { label: "วันที่เหลือ", id: 5, minWidth: 90, fontSize: "12px" },
    { label: "เหลือ ml", id: 6, minWidth: 78, fontSize: "12px" },
    { label: "วันหมดอายุ", id: 7, minWidth: 150, fontSize: "12px" },
];

interface ReadyBloodBagsProps {
    selectedGroupLabel: string;
}

export const ReadyBloodBags = ({ selectedGroupLabel }: ReadyBloodBagsProps) => {
    const { dataReadyBloodBags, loading } = useBloodBankStock(null, null, null, selectedGroupLabel);

    if (loading) return <p>กำลังโหลด...</p>;
    return (
        <StickyTable
            columns={columns}
            rows={dataReadyBloodBags}
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
                        {row.daysUntilExpire ? row.daysUntilExpire : "-"}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.bloodCCTotal ? row.bloodCCTotal : "-"}
                    </TableCell>
                    <TableCell
                        sx={{ fontSize: '13px' }}
                        align="center"
                    >
                        {row.expireDate ? dayjs(row.expireDate).format("DD-MM-YYYY") : "-"}
                    </TableCell>
                </>
            )}
        />
    )
}