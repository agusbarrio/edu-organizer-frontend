import { Menu } from "@mui/icons-material"
import { IconButton } from "@mui/material"

function DrawerMenuButton({ onClick }) {
    return (<IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onClick}
    >
        <Menu></Menu>
    </IconButton>)
}

export default DrawerMenuButton