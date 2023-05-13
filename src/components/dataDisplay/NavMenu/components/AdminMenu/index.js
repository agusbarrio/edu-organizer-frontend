import { Face, HistoryEdu, MenuBook, SupervisorAccount } from "@mui/icons-material"
import { List } from "@mui/material"
import NavListButton from "components/navigation/NavListButton"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import Mustache from "mustache"

import useLocaleContext from "hooks/useLocaleContext"
import useSessionContext from "hooks/useSessionContext"

function AdminMenu() {
    const { translate } = useLocaleContext()
    const { userSession: { organization: { shortId } } } = useSessionContext()
    return (
        <List>
            <NavListButton linkProps={{ href: Mustache.render(PATHS.DASHBOARD_COURSES, { organizationShortId: shortId }) }} icon={<MenuBook></MenuBook>} text={translate(TEXTS.ADMIN_MENU_BUTTON_COURSES)}></NavListButton>
            <NavListButton linkProps={{ href: Mustache.render(PATHS.DASHBOARD_STUDENTS, { organizationShortId: shortId }) }} icon={<Face></Face>} text={translate(TEXTS.ADMIN_MENU_BUTTON_STUDENTS)}></NavListButton>
            <NavListButton linkProps={{ href: Mustache.render(PATHS.DASHBOARD_TEACHERS, { organizationShortId: shortId }) }} icon={<SupervisorAccount></SupervisorAccount>} text={translate(TEXTS.ADMIN_MENU_BUTTON_TEACHERS)}></NavListButton>
            <NavListButton linkProps={{ href: Mustache.render(PATHS.DASHBOARD_CLASS_SESSIONS, { organizationShortId: shortId }) }} icon={<HistoryEdu></HistoryEdu>} text={translate(TEXTS.ADMIN_MENU_BUTTON_CLASS_SESSIONS)}></NavListButton>
        </List>
    )
}

export default AdminMenu