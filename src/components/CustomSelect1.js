import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(-1),

        minWidth: 196,
    },
    selectEmpty: {
        // marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect({name, options, initialValue, onChange, placeholder}) {
    const classes = useStyles();
    const [label, setLabel] = React.useState(`Select a ${placeholder}`);

    const [value, setValue] = React.useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
        if(e.target.value){
            setLabel(placeholder);
        }
        else{
            setLabel(`Select a ${placeholder}`);
        }
        onChange(name, e.target.value);
    };

    return (
        <div className="element">
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={value}
                    onChange={handleChange}
                    label={label}
                >
                    <MenuItem value="Mock Value Input">
                        <em>None</em>
                    </MenuItem>
                    {options.map((option)=>
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                    )}
                </Select>
            </FormControl>

        </div>
    );
}
