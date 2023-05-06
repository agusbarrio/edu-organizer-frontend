import { Logout } from "@mui/icons-material"
import { ListItemIcon, MenuItem } from "@mui/material"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useLogoutService from "services/auth/useLogoutService"

function LogoutMenuButton() {
    const { logout } = useLogoutService()
    const { translate } = useLocaleContext()
    return (
        <MenuItem onClick={logout}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            {translate(TEXTS.LOGOUT_BUTTON)}
        </MenuItem>
    )
}

export default LogoutMenuButton