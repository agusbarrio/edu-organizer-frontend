import { Box, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import CheckboxInput from "components/generic/CheckboxInput"
import IconButton from "components/generic/IconButton"
import INPUT_TYPES from "constants/INPUT_TYPES"
import { useMemo } from "react"

function InputListItem({ input, onClick, listItemIconProps, }) {

    const component = useMemo(() => {
        if (input.type === INPUT_TYPES.CHECKBOX) {
            return <CheckboxInput label={input.label || input.name} size="small"></CheckboxInput>
        }
        return null
    }, [input])

    return (
        <>
            <ListItem sx={{ gap: 2 }}>
                {listItemIconProps && <Box>
                    <IconButton {...listItemIconProps} onClick={onClick}  ></IconButton>
                </Box>}
                <Box sx={{ flexGrow: 1 }}>
                    {component}
                </Box>
            </ListItem>
            <Divider></Divider>
        </>

    )
}

export default InputListItem