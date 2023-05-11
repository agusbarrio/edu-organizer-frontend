
import { Controller, useFormContext } from "react-hook-form"
function ControllerInput({ render: Input, name, ...props }) {
    const { control, formState } = useFormContext()
    return <Controller control={control} name={name} render={({ field, fieldState }) => <Input error={!!fieldState?.error} helperText={fieldState?.error?.message} {...field} {...props} ref={null} />} />
}

export default ControllerInput

