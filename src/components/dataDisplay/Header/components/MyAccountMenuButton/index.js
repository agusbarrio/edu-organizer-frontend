import { Person } from "@mui/icons-material"
import { ListItemIcon, MenuItem } from "@mui/material"

function MyAccountMenuButton() {
    <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <Person fontSize="small" />
        </ListItemIcon>
        {translate(TEXTS.MY_ACCOUNT_PAGE_TITLE)}
    </MenuItem>
}

export default MyAccountMenuButton