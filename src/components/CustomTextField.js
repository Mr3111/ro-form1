import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";

const CustomTextField = ({name, initialValue, onChange, placeholder, type}) => {
    const [label, setLabel] = useState(initialValue? placeholder: `Enter ${placeholder}`);
    const [error, setError] = useState(false);
    const [value, setValue] = useState(initialValue)

    const valid = (value) =>{
        if(value===null || value===''){
            return true;
        }
        else if(type==='integer'){
            if(isNaN(parseInt(value)) || parseInt(value).toString()!==value)
                return false;
        }
        else if(type ==='float'){
            if(isNaN(parseFloat(value)) || parseFloat(value).toString()!==value)
                return false;
        }
        return true;
    }

    const handleChange = (value) =>{
        console.log(value)
        setValue(value)
        setError(!valid(value))
        if(value){
            setLabel(placeholder);
        }
        else{
            setLabel(`Enter ${placeholder}`);
        }
        if(!error)
            onChange(name, value);
    }

    return (
        <TextField
            value={value}
            error={error}
            helperText={error? `Can only be ${type}`:null}
            id="outlined-basic"
            label={label}
            variant="outlined"
            onChange={(e)=>handleChange(e.target.value)}
        />);
}

export default CustomTextField;
