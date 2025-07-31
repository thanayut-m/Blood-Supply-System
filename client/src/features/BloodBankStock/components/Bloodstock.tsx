import { TableCell, TableRow } from "@mui/material";
import { BasicTable } from "../../../components/MUI/BasicTable";
import { useBloodBankStock } from "../hook/useBloodBankStock";

interface BloodstockProps {
    selectedGroupLabel: string | null;
    onSelectGroup: (label: string | null) => void;
}

export const Bloodstock = ({ selectedGroupLabel, onSelectGroup }: BloodstockProps) => {
    const { dataTotalBlood, loading } = useBloodBankStock(null, null, null, null);

    const handleRowClick = (label: string) => {
        onSelectGroup(label === selectedGroupLabel ? null : label);
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
        ...(Array.isArray(dataTotalBlood)
            ? dataTotalBlood.map((item) => ({
                value: item.bloodTypeName,
                label: item.bloodTypeName,
            }))
            : []),
    ];


    const rows = bloodGroups.map(({ key, label }) => {
        const row: Record<string, string> = {
            bloodGroup: label,
        };

        if (Array.isArray(dataTotalBlood)) {
            dataTotalBlood.forEach((item) => {
                row[item.bloodTypeName] = item[key] || "0";
            });
        }

        return row;
    });


    if (loading) return <div>Loading...</div>;
    return (
        <BasicTable
            columns={columns}
            rows={rows}
            renderRow={(row: Record<string, string>) => (
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