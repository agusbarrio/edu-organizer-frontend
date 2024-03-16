import { Box, ListItem, ListItemText } from "@mui/material"
import CheckboxInput from "components/generic/CheckboxInput"
import IconButton from "components/generic/IconButton"
import NumberInput from "components/generic/NumberInput"
import TextInput from "components/generic/TextInput"
import INPUT_TYPES from "constants/INPUT_TYPES"
import { useMemo } from "react"

function InputListItem({ input, onClick, itemIconProps }) {
    const component = useMemo(() => {
        if (input.type === INPUT_TYPES.CHECKBOX) {
            return <CheckboxInput {...input?.inputConfig} label={input?.inputConfig?.label || input.name} size="small"></CheckboxInput>
        }
        if (input.type === INPUT_TYPES.TEXT) {
            return <TextInput {...input?.inputConfig} label={input?.inputConfig?.label || input.name} size="small" ></TextInput>
        }
        if (input.type === INPUT_TYPES.NUMBER) {
            return <NumberInput {...input?.inputConfig} label={input?.inputConfig?.label || input.name} size="small"></NumberInput>
        }
        return null
    }, [input])

    return (
        <ListItem sx={{ gap: 2 }}>
            {itemIconProps && <Box>
                <IconButton {...itemIconProps} onClick={onClick}  ></IconButton>
            </Box>}
            <ListItemText primary={component} />
        </ListItem>
    )
}

export default InputListItem