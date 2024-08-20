
import { NumericFormat } from 'react-number-format';
import { TextField } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

function NumberInput({ value: valueProp, onChange, ...props }) {
    const [value, setValue] = useState(valueProp)

    useEffect(() => {
        setValue(valueProp)
    }, [valueProp])

    const handleValueChange = useCallback((values) => {
        onChange({
            target: {
                value: values.floatValue || 0
            }
        })
    }, [onChange])

    return <NumericFormat {...props} customInput={TextField} onValueChange={handleValueChange} value={value} />
}

export default NumberInput
