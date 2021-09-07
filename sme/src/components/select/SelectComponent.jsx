import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
    formControl: {
      minWidth: 120,
      marginBottom: 30
    },
}));

const SelectComponent = (props) => {
    const classes = useStyles();

    const opcoes = (props.options ? props.options.map((option, i)=>{
        return(
            <MenuItem key={i} value={option.dre}>{option.dre}</MenuItem>
        )
    }):'')

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Diretoria</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.valueSelect}
                onChange={props.onChange}
                label="diretoria"
            >
                <MenuItem value="">
                    <em>Selecionar</em>
                </MenuItem>
                {opcoes}
            </Select>
        </FormControl>
    )
}

export default SelectComponent
