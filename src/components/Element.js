import React from 'react';
import './Element.css';
import CustomTextField from "./CustomTextField";
import SimpleSelect from "./CustomSelect1";
import {DatePicker} from "@material-ui/pickers";
import {YearSelection} from "@material-ui/pickers/views/Year/YearView";
import YearMonthPicker from "./YearMonthPicker";
import MaterialUIPickers from "./YearMonthPicker";

const Element = ({name, initialValue, onChange, placeholder, options, type}) => {


    return <div className="element row">
        {
            (options.length > 0 &&
                <SimpleSelect
                    initialValue={initialValue}
                    name={name}
                    placeholder={placeholder}
                    options={options}
                    onChange={onChange}
                />
            )
            ||
            (
                <CustomTextField
                    initialValue={initialValue}
                    placeholder={placeholder}
                    onChange={onChange}
                    name={name}
                    type={type}
                />
            )
            // ||
            // (
            //     (type === 'year') &&
            //     <MaterialUIPickers
            //
            //     />
            // )
        }
    </div>;
}

export default Element;
