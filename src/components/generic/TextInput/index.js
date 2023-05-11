import TextField from '@mui/material/TextField';
import _ from 'lodash';
import { useCallback, useEffect, useState } from 'react';

function TextInput({ value: valueProp = '', defaultValue = '', onChange, ...props }) {
    const [value, setValue] = useState(valueProp)

    useEffect(() => {
        setValue(valueProp)
    }, [valueProp])

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
        if (_.isFunction(onChange)) onChange(e)
    }, [onChange])

    return <TextField value={value} onChange={handleChange}{...props} />

}

export default TextInput
