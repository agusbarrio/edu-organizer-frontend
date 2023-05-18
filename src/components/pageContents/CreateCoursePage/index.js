import { Container } from "@mui/material"
import CoomingSoon from "components/dataDisplay/CoomingSoon"
import CourseForm from "components/forms/CourseForm"
import DashboardTemplate from "components/templates/DashboardTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useSessionContext from "hooks/useSessionContext"
import CreateCourseMachine from "machines/CreateCourseMachine"
import { useCallback } from "react"
import useCreateCourseService from "services/courses/useCreateCourseService"
import { renderText } from "utils/text"


function CreateCoursePage() {
    const { organization } = useSessionContext()
    const { translate } = useLocaleContext()
    const { go } = useNavigate()

    const goCourses = useCallback(() => {
        go(renderText(PATHS.DASHBOARD_COURSES, { organizationShortId: organization.shortId }))
    }, [go, organization.shortId])

    return (
        <DashboardTemplate
            title={translate(TEXTS.CREATE_COURSE_PAGE_TITLE)}
            subtitle={translate(TEXTS.CREATE_COURSE_PAGE_SUBTITLE)}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_COURSES),
                onClick: () => go(renderText(PATHS.DASHBOARD_COURSES, { organizationShortId: organization.shortId }))
            }}>
            <CreateCourseMachine onFinish={goCourses} onCancel={goCourses}></CreateCourseMachine>
        </DashboardTemplate>

    )
}

export default CreateCoursePage