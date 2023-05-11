import { Logout } from "@mui/icons-material"
import { ListItemIcon, MenuItem } from "@mui/material"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback } from "react"
import useLogoutService from "services/auth/useLogoutService"

function LogoutMenuButton() {
    const { go } = useNavigate()
    const { logout } = useLogoutService()
    const { translate } = useLocaleContext()
    const handleClick = useCallback(async () => {
        const result = await logout()
        if (result) go(PATHS.LOGIN)
    }, [logout, go])
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