import { ListItemButton as ListItemButtonMUI, ListItemIcon, ListItem, ListItemText } from "@mui/material"
import { useTheme } from "@mui/material"
function ListItemButton({ iconProps, text, itemProps, buttonProps, textProps }) {
    const { palette } = useTheme()
    return (
        <ListItem disablePadding {...itemProps}>
            <ListItemButtonMUI  {...buttonProps}>
                {<ListItemIcon {...iconProps} sx={{ color: palette.primary.main, ...iconProps?.sx }}></ListItemIcon>}
                <ListItemText primary={text}{...textProps} />
            </ListItemButtonMUI>
        </ListItem>
    )
}

export default ListItemButton