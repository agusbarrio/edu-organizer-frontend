import { Person } from "@mui/icons-material"
import { ListItemIcon, MenuItem } from "@mui/material"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback } from "react"

function MyAccountMenuButton() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const handleClick = useCallback(() => {
        go(PATHS.MY_ACCOUNT)
    }, [go])

    return (
        <MenuItem onClick={handleClick}>
            <ListItemIcon>
                <Person fontSize="small" />
            </ListItemIcon>
            {translate(TEXTS.MY_ACCOUNT_PAGE_TITLE)}
        </MenuItem>
    )
}

export default MyAccountMenuButton