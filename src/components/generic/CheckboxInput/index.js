import { FormControl, FormHelperText, FormControlLabel, Checkbox, } from '@mui/material';
import { useCallback, useState } from 'react';
import _ from 'lodash';

/**
 * Compontente que hace los TextInputs
 * @param {*} param0
 * @returns
 */
function CheckboxInput({
    inputProps = {},
    helperText,
    onChange,
    error,
    value: valueProp = false,
    size,
    ...props
}) {

    const [value, setValue] = useState(valueProp)



    const handleChange = useCallback((e) => {
        setValue(e.target.checked)
        if (_.isFunction(onChange)) onChange(e)
    }, [onChange])

    return (
        <FormControl error={error} size={size}>
            <FormControlLabel {...props} size={size} control={<Checkbox checked={value} onChange={handleChange} size={size} {...inputProps} />} />
            {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>

    );
}

export default CheckboxInput;
