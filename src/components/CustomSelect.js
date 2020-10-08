import React from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const CustomSelect = ({name, options, initialValue, onChange, placeholder}) => {
    const [label, setLabel] = React.useState(`Select a ${placeholder}`);

    const handleChange = (e) =>{
        if(e){
            setLabel(placeholder);
            onChange(name, e);
        }
        else{
            setLabel(`Select a ${placeholder}`);
            onChange(name, e);
        }
    }

    return <div className='select-button' >
        <Autocomplete
            autoComplete={true}
            value={initialValue}
            options={options}
            getOptionSelected={(option, value)=>{
                if (option.value === value.value){
                    handleChange(option)
                    return true
                }
                return false;
            }}
            getOptionLabel={(option) => option.label}
            style={{ width: 300 }}
            onChange={(event, option) => handleChange(option)}
            renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
        />
    </div>;
}

export default CustomSelect;
