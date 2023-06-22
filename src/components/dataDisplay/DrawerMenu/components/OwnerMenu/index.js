import { CorporateFare } from "@mui/icons-material"
import { List } from "@mui/material"
import NavListButton from "components/navigation/NavListButton"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function OwnerMenu() {
    const { translate } = useLocaleContext()
    return (
        <List>
            <NavListButton linkProps={{ href: PATHS.DASHBOARD_MY_ORGANIZATION }} iconProps={{ children: <CorporateFare></CorporateFare> }} text={translate(TEXTS.ADMIN_MENU_BUTTON_MY_ORGANIZATION)}></NavListButton>
        </List>
    )
}

export default OwnerMenu