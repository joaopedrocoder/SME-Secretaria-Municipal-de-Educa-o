import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const arrayMock = ['JT', 'BT', 'SA', 'CL', 'MP', 'G']

const useStyles = makeStyles(() => ({
    formControl: {
      minWidth: 120,
      marginBottom: 20
    },
}));

const SelectComponent = (props) => {
    const classes = useStyles();
    const [diretoria, setDiretoria] = React.useState('');

    const handleChange = (event) => {
        setDiretoria(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Diretoria</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={diretoria}
                onChange={handleChange}
                label="diretoria"
            >
                <MenuItem value="">
                    <em>Selecionar</em>
                </MenuItem>
                {/* <MenuItem value={10}>dir 1</MenuItem>
                <MenuItem value={20}>dir 2</MenuItem>
                <MenuItem value={30}>dir 3</MenuItem>
                <MenuItem value={30}>dir 4</MenuItem> */}
                {arrayMock.map((item, i)=>{
                    return(
                        <MenuItem key={i} value={item}>{item}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default SelectComponent
