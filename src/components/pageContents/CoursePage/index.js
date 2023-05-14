import LabelValue from "components/generic/LabelValue"
import DashboardTemplate from "components/templates/DashboardTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useDataContext from "hooks/useDataContext"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useSessionContext from "hooks/useSessionContext"
import { renderText } from "utils/text"

function CoursePage() {
    const { data: { course } } = useDataContext()
    const { organization } = useSessionContext()
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSE_PAGE_TITLE)}
            subtitle={translate(TEXTS.COURSE_PAGE_SUBTITLE)}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_COURSES),
                onClick: () => go(renderText(PATHS.DASHBOARD_COURSES, { organizationShortId: organization.shortId }))
            }}>
            <LabelValue label={translate(TEXTS.COURSE_NAME_LABEL)} value={course.name}></LabelValue>
            <LabelValue label={translate(TEXTS.COURSE_ID_LABEL)} value={course.id}></LabelValue>
            <LabelValue label={translate(TEXTS.COURSE_SHORT_ID_LABEL)} value={course.shortId}></LabelValue>
        </DashboardTemplate>

    )
}

export default CoursePage