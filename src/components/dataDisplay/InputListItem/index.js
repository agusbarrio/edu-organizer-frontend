import { Box, ListItem, ListItemText } from "@mui/material"
import CheckboxInput from "components/generic/CheckboxInput"
import IconButton from "components/generic/IconButton"
import INPUT_TYPES from "constants/INPUT_TYPES"
import { useMemo } from "react"

function InputListItem({ input, onClick, itemIconProps }) {
    const component = useMemo(() => {
        if (input.type === INPUT_TYPES.CHECKBOX) {
            return <CheckboxInput label={input.label || input.name} size="small"></CheckboxInput>
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