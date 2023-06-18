import { Logout } from "@mui/icons-material"
import { ListItemIcon, MenuItem } from "@mui/material"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useSessionContext from "hooks/useSessionContext"
import { useCallback } from "react"
import useLogoutService from "services/auth/useLogoutService"

function LogoutMenuButton() {
    const { userLogout, courseLogout } = useSessionContext()
    const { logout } = useLogoutService()
    const { translate } = useLocaleContext()

    const handleClick = useCallback(async () => {
        const result = await logout()
        if (result) {
            userLogout()
            courseLogout()
        }
    }, [logout, userLogout, courseLogout])
    return (
        <MenuItem onClick={handleClick}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            {translate(TEXTS.LOGOUT_BUTTON)}
        </MenuItem>
    )
}

export default LogoutMenuButton