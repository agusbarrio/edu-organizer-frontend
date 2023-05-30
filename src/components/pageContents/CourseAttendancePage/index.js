
import CoomingSoon from "components/dataDisplay/CoomingSoon"
import PublicTemplate from "components/templates/PublicTemplate"
import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function CourseHomePage() {
    const { translate } = useLocaleContext()
    return (
        <PublicTemplate title={translate(TEXTS.COURSE_ATTENDANCE_PAGE_TITLE)} type={TEMPLATE_TYPES.COURSE}>
            <CoomingSoon>{translate(TEXTS.COURSE_ATTENDANCE_PAGE_TITLE)}</CoomingSoon>
        </PublicTemplate>
    )
}

export default CourseHomePage