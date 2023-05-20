import LabelValue from "components/generic/LabelValue"
import DashboardTemplate from "components/templates/DashboardTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetStudentService from "services/students/useGetStudentService"
import { renderText } from "utils/text"

function StudentPage() {
    const { getStudent } = useGetStudentService()
    const { runService, loading, value: student } = useService({ service: getStudent, defaultValue: {} })
    const { go, params } = useNavigate()

    useEffect(() => {
        if (params.studentId) runService(params.studentId)
    }, [runService, params.studentId])
    const { translate } = useLocaleContext()
    return (
        <DashboardTemplate
            title={translate(TEXTS.STUDENT_PAGE_TITLE)}
            subtitle={translate(TEXTS.STUDENT_PAGE_SUBTITLE)}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_STUDENTS),
                onClick: () => go(renderText(PATHS.DASHBOARD_STUDENTS))
            }}
            loading={loading}
        >
            <LabelValue label={translate(TEXTS.STUDENT_ID_LABEL)} value={student.id}></LabelValue>
            <LabelValue label={translate(TEXTS.STUDENT_FIRST_NAME_LABEL)} value={student.firstName}></LabelValue>
            <LabelValue label={translate(TEXTS.STUDENT_LAST_NAME_LABEL)} value={student.lastName}></LabelValue>
        </DashboardTemplate>

    )
}

export default StudentPage