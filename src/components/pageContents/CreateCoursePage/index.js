import DashboardTemplate from "components/templates/DashboardTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import CourseMachine from "machines/CourseMachine"
import { useCallback } from "react"
import { renderText } from "utils/text"


function CreateCoursePage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()

    const goCourses = useCallback(() => {
        go(renderText(PATHS.DASHBOARD_COURSES))
    }, [go])

    return (
        <DashboardTemplate
            title={translate(TEXTS.CREATE_COURSE_PAGE_TITLE)}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_COURSES),
                onClick: () => go(renderText(PATHS.DASHBOARD_COURSES))
            }}>
            <CourseMachine onFinish={goCourses}></CourseMachine>
        </DashboardTemplate>

    )
}

export default CreateCoursePage