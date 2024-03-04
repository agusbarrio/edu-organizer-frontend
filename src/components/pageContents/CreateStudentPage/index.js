import { Container } from "@mui/material"
import StudentForm from "components/forms/StudentForm"
import DashboardTemplate from "components/templates/DashboardTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback, useRef } from "react"
import useCreateStudentService from "services/students/useCreateStudentService"
import { renderText } from "utils/text"

function CreateStudentPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { createStudent } = useCreateStudentService()

    const formRef = useRef(null)

    const handleSubmit = useCallback(async (data) => {
        const result = await createStudent({
            firstName: data.firstName,
            lastName: data.lastName,
            courseId: data.courseId,
            avatarFileId: data.avatar?.id || null
        })
        if (result && formRef?.current) {
            formRef.current.reset()
        }
    }, [createStudent, formRef])

    return (
        <DashboardTemplate
            title={translate(TEXTS.CREATE_STUDENT_PAGE_TITLE)}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_STUDENTS),
                onClick: () => go(renderText(PATHS.DASHBOARD_STUDENTS))
            }}>
            <Container maxWidth={'md'}>
                <StudentForm onSubmit={handleSubmit} ref={formRef} templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_ADD) } }}></StudentForm>
            </Container>
        </DashboardTemplate>

    )
}

export default CreateStudentPage