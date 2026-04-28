import { CorporateFare, Group } from "@mui/icons-material"
import { List } from "@mui/material"
import NavListButton from "components/navigation/NavListButton"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import useLocaleContext from "hooks/useLocaleContext"
import useSessionContext from "hooks/useSessionContext"
import { useMemo } from "react"

function OwnerMenu() {
    const { translate } = useLocaleContext()
    const { userSession: { user: { permissions = [] } = {} } = {} } = useSessionContext()
    const isAdmin = useMemo(() => permissions.includes(USER_PERMISSIONS.ADMIN), [permissions])
    return (
        <List>
            <NavListButton linkProps={{ href: PATHS.DASHBOARD_MY_ORGANIZATION }} iconProps={{ children: <CorporateFare></CorporateFare> }} text={translate(TEXTS.ADMIN_MENU_BUTTON_MY_ORGANIZATION)}></NavListButton>
            {isAdmin && <NavListButton linkProps={{ href: PATHS.DASHBOARD_ORGANIZATION_USERS }} iconProps={{ children: <Group></Group> }} text={translate(TEXTS.ADMIN_MENU_BUTTON_USERS)}></NavListButton>}
        </List>
    )
}

export default OwnerMenu