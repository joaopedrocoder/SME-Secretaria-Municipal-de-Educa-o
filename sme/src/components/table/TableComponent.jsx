import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },

    tableCell: {
        width: 30,
    }
});
  

const TableComponent = (props) => {
    const classes = useStyles()

    const rows = props.dadosDaTabela.map(({tipoesc, faixas}, index)=>{
        const count = []
        count.length = 8
        
        for(let item of faixas){
            switch (item.faixa) {
                case "Sem estudantes cadastrados":
                    count[0] = (item.count)
                    break;
                case "1 a 250 estudantes":
                    count[1] = (item.count)
                    break;
                case "251 a 500 estudantes":
                    count[2] = (item.count)
                    break;
                case "501 a 1000 estudantes":
                    count[3] = (item.count)
                    break;
                case "1001 a 1500 estudantes":
                    count[4] = (item.count)
                    break;
                case "1501 a 2000 estudantes":
                    count[5] = (item.count)
                    break;
                case "2001 a 2500 estudantes":
                    count[6] = (item.count)
                    break;
                case "Mais de 2500 estudantes":
                    count[7] = (item.count)
                    break;
                default:
                    break;
            } 
        }
       
        return(
            <TableRow key={index}>
                <TableCell component="th" scope="row">
                    {tipoesc}
                </TableCell>
                
                <TableCell align="center">{count[0] ? count[0]:0}</TableCell>
                <TableCell align="center">{count[1] ? count[1]:0}</TableCell>
                <TableCell align="center">{count[2] ? count[2]:0}</TableCell>
                <TableCell align="center">{count[3] ? count[3]:0}</TableCell>
                <TableCell align="center">{count[4] ? count[4]:0}</TableCell>
                <TableCell align="center">{count[5] ? count[5]:0}</TableCell>
                <TableCell align="center">{count[6] ? count[6]:0}</TableCell>
                <TableCell align="center">{count[7] ? count[7]:0}</TableCell>
            </TableRow>
        )
    })

    console.log(props.dadosDaTabela)

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
                    {rows}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent
