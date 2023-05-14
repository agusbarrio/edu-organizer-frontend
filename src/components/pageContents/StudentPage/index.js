import LabelValue from "components/generic/LabelValue"
import DashboardTemplate from "components/templates/DashboardTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useDataContext from "hooks/useDataContext"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useSessionContext from "hooks/useSessionContext"
import { renderText } from "utils/text"

function StudentPage() {
    const { data: { student } } = useDataContext()
    const { organization } = useSessionContext()
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    return (
        <DashboardTemplate
            title={translate(TEXTS.STUDENT_PAGE_TITLE)}
            subtitle={translate(TEXTS.STUDENT_PAGE_SUBTITLE)}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_STUDENTS),
                onClick: () => go(renderText(PATHS.DASHBOARD_STUDENTS, { organizationShortId: organization.shortId }))
            }}>
            <LabelValue label={translate(TEXTS.STUDENT_ID_LABEL)} value={student.id}></LabelValue>
            <LabelValue label={translate(TEXTS.STUDENT_FIRST_NAME_LABEL)} value={student.firstName}></LabelValue>
            <LabelValue label={translate(TEXTS.STUDENT_LAST_NAME_LABEL)} value={student.lastName}></LabelValue>
        </DashboardTemplate>

    )
}

export default StudentPage