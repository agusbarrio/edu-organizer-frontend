import CourseTemplate from "components/templates/CourseTemplate"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import useNavigate from "hooks/useNavigate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import StudentForm from "components/forms/StudentForm"
import { useCallback } from "react"
import useCreateNewStudentService from "services/courseAccess/useCreateNewStudent"
import useSessionContext from "hooks/useSessionContext"

function CourseNewStudentPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { createNewStudent } = useCreateNewStudentService()
    const { courseSession: { course } } = useSessionContext()

    const handleSubmit = useCallback(async (data) => {
        const result = await createNewStudent({
            firstName: data.firstName,
            lastName: data.lastName,
            courseId: data.courseId,
            avatarFileId: data.avatar?.id || null,
            birthDate: data.birthDate,
            additionalInfo: data.additionalInfo
        })
        if (result) go(PATHS.COURSE)
    }, [createNewStudent, go])
    return (
        <CourseTemplate title={translate(TEXTS.COURSE_NEW_STUDENT_PAGE_TITLE)} backButtonProps={{ onClick: () => go(PATHS.COURSE), children: translate(CORE_TEXTS.GENERIC_BACK) }}>
            <StudentForm withCourse={false} onSubmit={handleSubmit} templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_ADD) } }} defaultValues={{ course }} showFilesInput={false}></StudentForm>
        </CourseTemplate>
    )
}

export default CourseNewStudentPage