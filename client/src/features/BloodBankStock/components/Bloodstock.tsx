import { TableCell, TableRow } from "@mui/material";
import { BasicTable } from "../../../components/MUI/BasicTable";
import { useBloodBankStock } from "../hook/useBloodBankStock";

export const Bloodstock = ({ selectedGroupLabel, onSelectGroup }) => {
    const { dataTotalBlood } = useBloodBankStock();

    const handleRowClick = (label: string) => {
        onSelectGroup(label === selectedGroupLabel ? null : label); // toggle
    };

    const bloodGroups = [
        { key: "groupA", label: "A" },
        { key: "groupB", label: "B" },
        { key: "groupAB", label: "AB" },
        { key: "groupO", label: "O" },
        { key: "groupNon", label: "ไม่ทราบ" },
    ];

    const columns = [
        { value: "bloodGroup", label: "หมู่เลือด" },
        ...dataTotalBlood.map((item) => ({
            value: item.bloodTypeName,
            label: item.bloodTypeName,
        })),
    ];

    const rows = bloodGroups.map(({ key, label }) => {
        const row = {
            bloodGroup: label,
        };

        dataTotalBlood.forEach((item) => {
            row[item.bloodTypeName] = item[key] || "0";
        });

        return row;
    });

    return (
        <BasicTable
            columns={columns}
            rows={rows}
            renderRow={(row) => (
                <TableRow
                    key={row.bloodGroup}
                    onClick={() => handleRowClick(row.bloodGroup)}
                    hover
                    sx={{
                        cursor: "pointer",
                        backgroundColor: selectedGroupLabel === row.bloodGroup ? "#e0f7fa" : undefined,
                    }}
                >
                    {columns.map((col) => (
                        <TableCell key={col.value} align="center">
                            {row[col.value]}
                        </TableCell>
                    ))}
                </TableRow>
            )}
        />
    );
};
