import CoomingSoon from "components/dataDisplay/CoomingSoon"
import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function TeachersPage() {
    const { translate } = useLocaleContext()
    return (
        <DashboardTemplate >
            <CoomingSoon>{translate(TEXTS.TEACHERS_PAGE_TITLE)}</CoomingSoon>
        </DashboardTemplate>
    )
}

export default TeachersPage