import { FormControl } from '@mui/material';
import { DateField } from '@mui/x-date-pickers';

import useLocaleContext from 'hooks/useLocaleContext';
import _ from 'lodash';
import { useCallback } from 'react';


/**
 * Material Button Icon
 * @param {*} param0
 * @returns
 */
function DateInput({ onChange, size, error, helperText, value: valueProp = null, ...props }) {
  const { dateFormat } = useLocaleContext();

  const handleChange = useCallback((newValue) => {
    if (_.isFunction(onChange)) onChange(newValue)
  }, [onChange])
  return (
    <FormControl error={error} size={size}>
      <DateField
        value={valueProp}
        onChange={handleChange}
        format={dateFormat}
        size={size}
        slotProps={{
          textField: {
            error,
            helperText,
          }
        }
        }
        {...props}
      />
    </FormControl>


  );
}

export default DateInput;
