import CoomingSoon from "components/dataDisplay/CoomingSoon"
import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function ClassSessionsPage() {
    const { translate } = useLocaleContext()
    return (
        <DashboardTemplate
            title={translate(TEXTS.CLASS_SESSIONS_PAGE_TITLE)}
            subtitle={translate(TEXTS.CLASS_SESSIONS_PAGE_SUBTITLE)} >
            <CoomingSoon></CoomingSoon>
        </DashboardTemplate>
    )
}

export default ClassSessionsPage