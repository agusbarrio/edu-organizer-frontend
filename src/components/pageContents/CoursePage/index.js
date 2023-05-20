import LabelValue from "components/generic/LabelValue"
import DashboardTemplate from "components/templates/DashboardTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { renderText } from "utils/text"
import useService from "hooks/useService"
import useGetCourseService from "services/courses/useGetCourseService"
import { useEffect } from "react"

function CoursePage() {
    const { getCourse } = useGetCourseService()
    const { runService, loading, value: course } = useService({ service: getCourse, defaultValue: {} })
    const { params } = useNavigate()

    useEffect(() => {
        if (params.courseId) runService(params.courseId)
    }, [runService, params.courseId])

    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSE_PAGE_TITLE)}
            subtitle={translate(TEXTS.COURSE_PAGE_SUBTITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_COURSES),
                onClick: () => go(renderText(PATHS.DASHBOARD_COURSES))
            }}>
            <LabelValue label={translate(TEXTS.COURSE_NAME_LABEL)} value={course?.name}></LabelValue>
            <LabelValue label={translate(TEXTS.COURSE_ID_LABEL)} value={course?.id}></LabelValue>
            <LabelValue label={translate(TEXTS.COURSE_SHORT_ID_LABEL)} value={course?.shortId}></LabelValue>
        </DashboardTemplate>

    )
}

export default CoursePage