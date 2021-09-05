import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const arrayMock = [
    {
        "tipoesc": "EMEF        ",
        "faixa": "1 a 250 estudantes",
        "count": 2
    },
    {
        "tipoesc": "EMEFM       ",
        "faixa": "1001 a 1500 estudantes",
        "count": 4
    },
    {
        "tipoesc": "ESP CONV    ",
        "faixa": "1 a 250 estudantes",
        "count": 26
    },
    {
        "tipoesc": "EMEFM       ",
        "faixa": "1501 a 2000 estudantes",
        "count": 1
    },
    {
        "tipoesc": "MOVA        ",
        "faixa": "1 a 250 estudantes",
        "count": 290
    },
    {
        "tipoesc": "CIEJA       ",
        "faixa": "501 a 1000 estudantes",
        "count": 10
    }
]

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },

    tableCell: {
        width: 30,
    }
});
  
function createData(name, faixa1, faixa2, faixa3, faixa4, faixa5, faixa6, faixa7, faixa8) {
    return { name, faixa1, faixa2, faixa3, faixa4, faixa5, faixa6, faixa7, faixa8 };
}
  
// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const rows = arrayMock.map((row)=>{
    return (
        createData(row.tipoesc)
    )
})
  

const TableComponent = () => {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tipo de Escola</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Sem estudantes cadastrados</TableCell>
                        <TableCell align="center" className={classes.tableCell}>1 a 250 estudantes</TableCell>
                        <TableCell align="center" className={classes.tableCell}>251 a 500 estudantes</TableCell>
                        <TableCell align="center" className={classes.tableCell}>501 a 1000 estudantes</TableCell>
                        <TableCell align="center" className={classes.tableCell}>1001 a 1500 estudantes</TableCell>
                        <TableCell align="center" className={classes.tableCell}>1501 a 2000 estudantes</TableCell>
                        <TableCell align="center" className={classes.tableCell}>2001 a 2500 estudantes</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Mais de 2500 estudantes</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="center">{row.faixa1}</TableCell>
                        <TableCell align="center">{row.faixa2}</TableCell>
                        <TableCell align="center">{row.faixa3}</TableCell>
                        <TableCell align="center">{row.faixa4}</TableCell>
                        <TableCell align="center">{row.faixa5}</TableCell>
                        <TableCell align="center">{row.faixa6}</TableCell>
                        <TableCell align="center">{row.faixa7}</TableCell>
                        <TableCell align="center">{row.faixa8}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent
