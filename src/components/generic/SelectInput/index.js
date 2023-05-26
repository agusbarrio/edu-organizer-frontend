import { Select, MenuItem, FormControl, InputLabel, FormHelperText, } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';

/**
 * Compontente que hace los TextInputs
 * @param {*} param0
 * @returns
 */
function SelectInput({
  children,
  variant = 'outlined',
  renderValue,
  label,
  inputProps = {},
  sx,
  list = [],
  helperText,
  onChange,
  error,
  multiple,
  value: valueProp = '',
  ...props
}) {

  const [value, setValue] = useState(valueProp)

  useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
    if (_.isFunction(onChange)) onChange(e)
  }, [onChange])


  const getItemFromValue = useCallback(
    (value) => {
      return list.find((item) => item?.value === value);
    },
    [list]
  );
  const renderValueHandler = useCallback(
    (selected) => {
      if (_.isArray(selected)) {
        if (selected.length === 0) return getItemFromValue('')?.children;
        const selectedItemsList = selected.map(getItemFromValue);

        return _.isFunction(renderValue)
          ? renderValue(selectedItemsList)
          : selectedItemsList.map((item) => item?.children).join(', ');
      } else {
        const selectedItem = getItemFromValue(selected);

        return _.isFunction(renderValue)
          ? renderValue(getItemFromValue(selectedItem))
          : selectedItem?.children;
      }
    },
    [getItemFromValue, renderValue]
  );
  return (
    <FormControl error={error} >
      <InputLabel id={label} error={error} size={props?.size}>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        multiple={multiple}
        labelId={label}
        label={label}
        variant={variant}
        inputProps={inputProps}
        renderValue={renderValueHandler}
        error={error}
        {...props}
      >
        {list.map((item, index) => (
          <MenuItem {...item} value={item.value} key={index}>
            {item.children}
          </MenuItem>
        ))}
      </Select>
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>

  );
}

export default SelectInput;
