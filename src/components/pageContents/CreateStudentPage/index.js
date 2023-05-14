import { Container } from "@mui/material"
import CoomingSoon from "components/dataDisplay/CoomingSoon"
import StudentForm from "components/forms/StudentForm"
import DashboardTemplate from "components/templates/DashboardTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useSessionContext from "hooks/useSessionContext"
import { useCallback } from "react"
import useCreateStudentService from "services/students/useCreateStudentService"
import { renderText } from "utils/text"

function CreateStudentPage() {
    const { organization } = useSessionContext()
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { createStudent } = useCreateStudentService()

    const handleSubmit = useCallback(async (data) => {
        const result = await createStudent(data)
        if (result) {
            go(renderText(PATHS.DASHBOARD_STUDENTS, { organizationShortId: organization.shortId }))
        }
    }, [createStudent, go, organization.shortId])

    return (
        <DashboardTemplate
            title={translate(TEXTS.CREATE_STUDENT_PAGE_TITLE)}
            subtitle={translate(TEXTS.CREATE_STUDENT_PAGE_SUBTITLE)}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_STUDENTS),
                onClick: () => go(renderText(PATHS.DASHBOARD_STUDENTS, { organizationShortId: organization.shortId }))
            }}>
            <Container maxWidth={'md'}>
                <StudentForm onSubmit={handleSubmit}></StudentForm>
            </Container>
        </DashboardTemplate>

    )
}

export default CreateStudentPage