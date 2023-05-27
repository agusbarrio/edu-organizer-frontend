import { Face, HistoryEdu, MenuBook, SupervisorAccount } from "@mui/icons-material"
import { List } from "@mui/material"
import NavListButton from "components/navigation/NavListButton"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"

import useLocaleContext from "hooks/useLocaleContext"
import useSessionContext from "hooks/useSessionContext"
import { useMemo } from "react"
import { renderText } from "utils/text"

function AdminMenu() {
    const { translate } = useLocaleContext()
    const { user: { organization: { shortId } } } = useSessionContext()

    return (
        <List>
            <NavListButton linkProps={{ href: renderText(PATHS.DASHBOARD_COURSES, { organizationShortId: shortId }) }} iconProps={{ children: <MenuBook></MenuBook> }} text={translate(TEXTS.ADMIN_MENU_BUTTON_COURSES)}></NavListButton>
            <NavListButton linkProps={{ href: renderText(PATHS.DASHBOARD_STUDENTS, { organizationShortId: shortId }) }} iconProps={{ children: <Face></Face> }} text={translate(TEXTS.ADMIN_MENU_BUTTON_STUDENTS)}></NavListButton>
            <NavListButton linkProps={{ href: renderText(PATHS.DASHBOARD_TEACHERS, { organizationShortId: shortId }) }} iconProps={{ children: <SupervisorAccount></SupervisorAccount> }} text={translate(TEXTS.ADMIN_MENU_BUTTON_TEACHERS)}></NavListButton>
            <NavListButton linkProps={{ href: renderText(PATHS.DASHBOARD_CLASS_SESSIONS, { organizationShortId: shortId }) }} iconProps={{ children: <HistoryEdu></HistoryEdu> }} text={translate(TEXTS.ADMIN_MENU_BUTTON_CLASS_SESSIONS)}></NavListButton>
        </List>
    )
}

export default AdminMenu