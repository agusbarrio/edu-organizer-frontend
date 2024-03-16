
import { useCallback } from "react"
import { Controller, useFormContext } from "react-hook-form"
function ControllerInput({ render: Input, name, defaultValue, onChange, ...props }) {
    const { control } = useFormContext()
    const handleOnChange = useCallback((controlOnChange, e) => {
        controlOnChange(e)
        if (onChange) {
            onChange(e)
        }
    }, [onChange])
    return <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field, fieldState }) => <Input error={!!fieldState?.error} helperText={fieldState?.error?.message} {...field} {...props} ref={null} onChange={(e) => { handleOnChange(field.onChange, e) }} />}
    />
}

export default ControllerInput

