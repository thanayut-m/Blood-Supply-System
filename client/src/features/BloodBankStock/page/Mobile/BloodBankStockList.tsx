import { TableCell, TableRow } from "@mui/material";
import { BasicTable } from "../../../../components/MUI/BasicTable";
import { DesktopPrivateLayout } from "../../../../layouts/DesktopPrivateLayout"
import { BloodDonationHistory } from "../../components/BloodDonationHistory";
import { useBloodTypeOption } from "../../hook/useBloodTypeOption";
import { useBloodBankStock } from "../../hook/useBloodBankStock";


export const BloodBankStockList = () => {
    const { BloodTypeOption } = useBloodTypeOption()
    const { dataTotalBlood } = useBloodBankStock()
    console.log(dataTotalBlood)

    const columns = [
        { value: "bloodGroup", label: "หมู่เลือด" },
        ...BloodTypeOption.map((item) => ({
            value: item.value,
            label: item.label,
        })),
    ];

    const rows = [
        { name: 'A', },
        { name: 'B', },
        { name: 'O', },
        { name: 'ไม่ทราบ', },
    ];
    return (
        <DesktopPrivateLayout>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                    <div className="bg-white rounded-2xl px-4 py-2">
                        <BasicTable
                            columns={columns}
                            rows={rows}
                            renderRow={(row, columns) => (
                                <TableRow key={row.name}>
                                    <TableCell >{row.name}</TableCell>
                                    <TableCell >{row.calories}</TableCell>
                                    <TableCell >{row.fat}</TableCell>
                                    <TableCell >{row.carbs}</TableCell>
                                    <TableCell >{row.protein}</TableCell>
                                </TableRow>
                            )}
                        />
                    </div>
                </div>
                <div className="col-span-9">
                    <BloodDonationHistory />
                </div>
            </div>
        </DesktopPrivateLayout>
    )
}