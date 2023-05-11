import { ListItemButton as ListItemButtonMUI, ListItemIcon, ListItem, ListItemText } from "@mui/material"
import { useTheme } from "@mui/material"
function ListItemButton({ icon, text, itemProps, buttonProps, textProps }) {
    const { palette } = useTheme()
    return (
        <ListItem disablePadding {...itemProps}>
            <ListItemButtonMUI  {...buttonProps}>
                {icon && <ListItemIcon sx={{ color: palette.primary.main }}>
                    {icon}
                </ListItemIcon>}
                <ListItemText primary={text}{...textProps} />
            </ListItemButtonMUI>
        </ListItem>
    )
}

export default ListItemButton