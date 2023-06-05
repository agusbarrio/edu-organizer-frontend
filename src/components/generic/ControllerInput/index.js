
import { Controller, useFormContext } from "react-hook-form"
function ControllerInput({ render: Input, name, defaultValue, ...props }) {
    const { control } = useFormContext()
    return <Controller control={control} defaultValue={defaultValue} name={name} render={({ field, fieldState }) => <Input error={!!fieldState?.error} helperText={fieldState?.error?.message} {...field} {...props} ref={null} />} />
}

export default ControllerInput

