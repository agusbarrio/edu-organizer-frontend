import CoomingSoon from "components/dataDisplay/CoomingSoon"
import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function TeachersPage() {
    const { translate } = useLocaleContext()
    return (
        <DashboardTemplate
            title={translate(TEXTS.TEACHERS_PAGE_TITLE)}
            subtitle={translate(TEXTS.TEACHERS_PAGE_SUBTITLE)}
        >
            <CoomingSoon></CoomingSoon>
        </DashboardTemplate>
    )
}

export default TeachersPage