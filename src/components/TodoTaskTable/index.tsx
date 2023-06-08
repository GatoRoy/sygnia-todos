import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ITodoTask } from '../../store/types';
import { getDisplayedPriority, isTaskStatusCompleted } from '../../store/utils';
import { Checkbox } from '../controls/Checkbox';

export type ColumnType = 'title' | 'priority' | 'status' | 'created_at';

interface TaskColumn {
    type: ColumnType;
    label: string;
    minWidth?: number;
    align?: 'right';
    render?: (data: ITodoTask) => React.ReactNode;
}

interface TodoTaskTableProps {
    items: ITodoTask[];
    onTaskChecked: (item: ITodoTask) => void;
}

//table for the tasks with sticky header
export const TodoTaskTable = ({ items, onTaskChecked }: TodoTaskTableProps) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const renderTaskCheckbox = (item: ITodoTask) => {
        return <Checkbox checked={isTaskStatusCompleted(item.status)} onChange={() => onTaskChecked(item)} />
    };

    const columns: readonly TaskColumn[] = [
        { type: 'status', label: '', minWidth: 50, render: renderTaskCheckbox },
        { type: 'title', label: 'Title', minWidth: 170 },
        { type: 'created_at', label: 'Created At', minWidth: 170 },
        { type: 'priority', label: 'Priority', minWidth: 170, render: (item: ITodoTask) => getDisplayedPriority(item.priority).caption },
    ];

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.type}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {items
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                            return (
                                <TableCell key={column.type} align={column.align}>
                                    {column.render
                                        ? column.render(row)
                                        : row[column.type]}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={items.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    );
};
