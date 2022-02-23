import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCharacter, selectDataTable} from "../../slice/dataTable";
import {Table, TableCell, TableHead, TableRow} from "@mui/material";
import {Paper} from '@mui/material';
import {TableContainer, TableBody} from '@mui/material';

export const DataTable = () => {
    const dispatch = useDispatch();
    const dataBase = useSelector(selectDataTable())


    const yearSet = new Set();

    Object.values(dataBase).forEach(regionValue => {
        Object.keys(regionValue.G).forEach(year => yearSet.add(year))
    })
    const yearRow = Array.from(yearSet).sort((a, b) => a - b);
    const columns = yearRow.map(() => ['XX', "YY", "ZZ"]).flat();

    const rows = Object.keys(dataBase).map(region => {
        return [{value: region}, ...yearRow.map(year => {
            const data = dataBase[region].G[year]
            return ['XX', "YY", "ZZ"].map(key => {
                return {...data?.[key], region, year, key}
            })
        }).flat()]
    })


    useEffect(() => {
        dispatch(getCharacter());
    }, []);

    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);
    // const handleChangePage = (event: unknown, newPage: number) => {
    //     setPage(newPage);
    // };
    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    const onCellClick = (cell: {}) => {
        console.log(cell);

    }
    return (
        <Paper sx={{width: '100%'}}>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" rowSpan={2}>
                                Regions
                            </TableCell>
                            {yearRow.map(year => (
                                <TableCell key={year} align="center" colSpan={3}>
                                    {year}
                                </TableCell>))}
                        </TableRow>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                    key={index}
                                >
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow>
                                {row.map(cell => (
                                    <TableCell onClick={() => {

                                        onCellClick(cell)
                                    }}>{cell.value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
