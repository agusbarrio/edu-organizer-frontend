import { Face, HistoryEdu, MenuBook, SupervisorAccount } from "@mui/icons-material"
import { List } from "@mui/material"
import NavListButton from "components/navigation/NavListButton"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"

import useLocaleContext from "hooks/useLocaleContext"

function AdminMenu() {
    const { translate } = useLocaleContext()
    return (
        <List>
            <NavListButton linkProps={{ href: PATHS.DASHBOARD_COURSES }} icon={<MenuBook></MenuBook>} text={translate(TEXTS.ADMIN_MENU_BUTTON_COURSES)}></NavListButton>
            <NavListButton linkProps={{ href: PATHS.DASHBOARD_STUDENTS }} icon={<Face></Face>} text={translate(TEXTS.ADMIN_MENU_BUTTON_STUDENTS)}></NavListButton>
            <NavListButton linkProps={{ href: PATHS.DASHBOARD_TEACHERS }} icon={<SupervisorAccount></SupervisorAccount>} text={translate(TEXTS.ADMIN_MENU_BUTTON_TEACHERS)}></NavListButton>
            <NavListButton linkProps={{ href: PATHS.DASHBOARD_CLASS_SESSIONS }} icon={<HistoryEdu></HistoryEdu>} text={translate(TEXTS.ADMIN_MENU_BUTTON_CLASS_SESSIONS)}></NavListButton>
        </List>
    )
}

export default AdminMenu