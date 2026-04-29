import CourseTemplate from "components/templates/CourseTemplate"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import useNavigate from "hooks/useNavigate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import StudentForm from "components/forms/StudentForm"
import { useCallback, useEffect, useMemo } from "react"
import useSessionContext from "hooks/useSessionContext"
import useGetCourseStudentService from "services/courseAccess/useGetCourseStudentService"
import useService from "hooks/useService"
import useEditCourseStudentService from "services/courseAccess/useEditCourseStudentService"
import { parseOptionalCalendarDateForForm, serializeOptionalDateOnlyForApi } from "utils/calendarDate"

function CourseEditStudentPage() {
    const { translate } = useLocaleContext()
    const { go, params } = useNavigate()
    const { courseSession: { course } } = useSessionContext()
    const { getCourseStudent } = useGetCourseStudentService()
    const { editCourseStudent } = useEditCourseStudentService()
    const { value: currentStudent, runService, loading } = useService({ service: getCourseStudent, defaultValue: null })

    useEffect(() => {
        runService(params.studentId)
    }, [params.studentId, runService])

    const handleSubmit = useCallback(async (data) => {
        const result = await editCourseStudent({
            studentId: params.studentId,
            firstName: data.firstName,
            lastName: data.lastName,
            avatarFileId: data.avatar?.id || null,
            birthDate: serializeOptionalDateOnlyForApi(data.birthDate),
            additionalInfo: data.additionalInfo
        })
        if (result) go(PATHS.COURSE_STUDENTS)
    }, [editCourseStudent, go, params.studentId])

    const defaultValues = useMemo(() => {
        if (!currentStudent) return undefined
        return {
            ...currentStudent,
            birthDate: parseOptionalCalendarDateForForm(currentStudent.birthDate),
            avatar: currentStudent.avatar || null,
            course
        }
    }, [course, currentStudent])

    return (
        <CourseTemplate title={translate(TEXTS.COURSE_EDIT_STUDENT_PAGE_TITLE)} backButtonProps={{ onClick: () => go(PATHS.COURSE_STUDENTS), children: translate(CORE_TEXTS.GENERIC_BACK) }} loading={loading}>
            {!!defaultValues && <StudentForm withCourse={false} onSubmit={handleSubmit} templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_EDIT) } }} defaultValues={defaultValues} showFilesInput={false}></StudentForm>}
        </CourseTemplate>
    )
}

export default CourseEditStudentPage
