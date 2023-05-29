import DashboardTemplate from "components/templates/DashboardTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import useSessionContext from "hooks/useSessionContext"
import CourseMachine from "machines/CourseMachine"
import { useCallback, useEffect, useMemo } from "react"
import useGetCourseService from "services/courses/useGetCourseService"
import { renderText } from "utils/text"
import { v4 as uuidv4 } from 'uuid';


function EditCoursePage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()

    const goCourses = useCallback(() => {
        go(renderText(PATHS.DASHBOARD_COURSES))
    }, [go])
    const { getCourse } = useGetCourseService()
    const { params } = useNavigate()
    const { value: course, loading, runService } = useService({ service: getCourse, defaultValue: {} })

    useEffect(() => {
        if (params?.courseId) runService(params.courseId)
    }, [params.courseId, runService])

    const initialContext = useMemo(() => ({
        name: course?.name,
        accessPin: course?.accessPin,
        students: course?.students?.map((student) => ({ ...student, isNew: false })),
        studentAttendanceFormData: course?.studentAttendanceFormData?.map(input => ({ ...input, key: uuidv4() })),
        id: course?.id,
    }), [course])


    return (
        <DashboardTemplate
            title={translate(TEXTS.EDIT_COURSE_PAGE_TITLE)}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_COURSES),
                onClick: () => go(renderText(PATHS.DASHBOARD_COURSES))
            }}
            loading={loading}
        >
            <CourseMachine onFinish={goCourses} edit={true} initialContext={initialContext}></CourseMachine>
        </DashboardTemplate>

    )
}

export default EditCoursePage