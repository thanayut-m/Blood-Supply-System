import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export function BasicTable({ columns, rows, renderRow }) {
    return (
        <TableContainer
            component={Paper}
            sx={{
                overflowX: 'auto',
                maxWidth: '100%',
            }}
        >
            <Table size="small" aria-label="basic table" sx={{ tableLayout: 'auto', minWidth: 'max-content' }}>
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell
                                key={String(col.value)}
                                align={col.align || 'left'}
                                sx={{
                                    fontWeight: 'bold',
                                    whiteSpace: 'nowrap',
                                    textAlign: 'center',
                                    width: 'fit-content'
                                }}
                            >
                                {col.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) =>
                        renderRow ? (
                            <React.Fragment key={i}>{renderRow(row, columns)}</React.Fragment>
                        ) : (
                            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                {columns.map((col) => (
                                    <TableCell
                                        key={String(col.value)}
                                        align={col.align || 'left'}
                                        sx={{ whiteSpace: 'nowrap', width: 'fit-content' }}
                                    >
                                        {col.format ? col.format(row[col.value]) : row[col.value]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        )
                    )}
                </TableBody>

            </Table>
        </TableContainer>
    );
}


