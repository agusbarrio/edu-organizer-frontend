import { Group } from "@mui/icons-material"
import { List } from "@mui/material"
import NavListButton from "components/navigation/NavListButton"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function SuperAdminMenu() {
    const { translate } = useLocaleContext()
    return (
        <List>
            <NavListButton linkProps={{ href: PATHS.DASHBOARD_USERS }} iconProps={{ children: <Group></Group> }} text={translate(TEXTS.SUPERADMIN_MENU_BUTTON_USERS)}></NavListButton>
        </List>
    )
}

export default SuperAdminMenu