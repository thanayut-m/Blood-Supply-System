import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
} from "@mui/material";
import { useState } from "react";

interface Column {
    id: string;
    label: string;
    align?: "left" | "right" | "center";
    minWidth?: number;
    fontSize?: string;
}

interface StickyTableProps<T> {
    columns: Column[];
    rows: T[];
    renderRow: (row: T, index: number) => React.ReactNode;
    getRowId?: (row: T) => string | number;
}

export function StickyTable<T>({
    columns,
    rows,
    renderRow,
    getRowId,
}: StickyTableProps<T>) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const paginatedRows = rows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: "16px" }}>
            <TableContainer>
                <Table stickyHeader size="small" aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align || "left"}
                                    sx={{
                                        fontWeight: "bold",
                                        minWidth: column.minWidth,
                                        textAlign: column.align || "center",
                                        fontSize: column.fontSize,
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginatedRows.map((row, index) => {
                            const actualIndex = index + page * rowsPerPage;
                            const rowKey = getRowId?.(row) ?? actualIndex;

                            return (
                                <TableRow hover key={rowKey}>
                                    {renderRow(row, actualIndex)}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
