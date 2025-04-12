import CourseTemplate from "components/templates/CourseTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import ClassSessionMachine from "machines/ClassSessionMachine"
import moment from "moment"
import { useCallback, useEffect, useMemo } from "react"
import useGetClassSessionCourse from "services/courseAccess/useGetClassSessionCourse"
import { renderText } from "utils/text"


function CourseEditClassSessionPage() {
    const { translate } = useLocaleContext()
    const { go, goBack } = useNavigate()

    const goClassSessions = useCallback(() => {
        go(renderText(PATHS.COURSE_CLASS_SESSIONS))
    }, [go])

    const { getClassSessionCourse } = useGetClassSessionCourse()
    const { params } = useNavigate()
    const { value: classSession, loading, runService } = useService({ service: getClassSessionCourse })

    useEffect(() => {
        if (params?.classSessionId) runService(params.classSessionId)
    }, [params.classSessionId, runService])

    const initialContext = useMemo(() => ({
        course: classSession?.course,
        date: moment(classSession?.date),
        id: classSession?.id,
        presentStudentsIds: classSession?.classSessionStudents?.filter(classSessionStudent => classSessionStudent.isPresent).map(classSessionStudent => classSessionStudent.studentId),
        presentStudentsData: classSession?.classSessionStudents.filter(classSessionStudent => classSessionStudent.isPresent).map(classSessionStudent => ({ ...classSessionStudent, metadata: classSessionStudent.metadata, id: classSessionStudent.studentId })),
    }), [classSession])

    return (
        <CourseTemplate
            title={translate(TEXTS.EDIT_CLASS_SESSION_PAGE_TITLE)}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack
            }}
            loading={loading}
        >
            <ClassSessionMachine onFinish={goClassSessions} edit={true} initialContext={initialContext} forTeacher={true}></ClassSessionMachine>
        </CourseTemplate>

    )
}

export default CourseEditClassSessionPage