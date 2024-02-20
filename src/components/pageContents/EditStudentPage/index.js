import StudentForm from "components/forms/StudentForm"
import DashboardTemplate from "components/templates/DashboardTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import { useCallback, useEffect } from "react"
import useEditStudentService from "services/students/useEditStudentService"
import useGetStudentService from "services/students/useGetStudentService"
import { renderText } from "utils/text"


function EditStudentPage() {
    const { translate } = useLocaleContext()
    const { go, goBack } = useNavigate()

    const goStudents = useCallback(() => {
        go(renderText(PATHS.DASHBOARD_STUDENTS))
    }, [go])

    const { getStudent } = useGetStudentService()
    const { editStudent } = useEditStudentService()
    const { params } = useNavigate()
    const { value: student, loading, runService } = useService({ service: getStudent, defaultValue: {} })

    const handleSubmit = useCallback(async (data) => {
        const result = await editStudent(student?.id, {
            firstName: data.firstName,
            lastName: data.lastName,
            courseId: data.courseId,
            avatarFileId: data.avatar?.id || null
        })
        if (result) goStudents()
    }, [editStudent, goStudents, student])

    useEffect(() => {
        if (params?.studentId) runService(params.studentId)
    }, [params.studentId, runService])

    return (
        <DashboardTemplate
            title={translate(TEXTS.EDIT_STUDENT_PAGE_TITLE)}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack
            }}
            loading={loading}
        >
            <StudentForm defaultValues={student} onSubmit={handleSubmit}></StudentForm>
        </DashboardTemplate>

    )
}

export default EditStudentPage