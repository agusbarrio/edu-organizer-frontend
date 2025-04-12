import DashboardTemplate from "components/templates/DashboardTemplate"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllStudentsService from "services/students/useGetAllStudentsService"
import StudentsDataTable from "components/dataTables/StudentsDataTable"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import { ArrowForward } from "@mui/icons-material"
import useNavigate from "hooks/useNavigate"

function StudentsPage() {
    const { getAllStudents } = useGetAllStudentsService()
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { value: students, runService, loading } = useService({ service: getAllStudents, defaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])

    return (
        <DashboardTemplate
            title={translate(TEXTS.STUDENTS_PAGE_TITLE)}
            subtitle={translate(TEXTS.STUDENTS_PAGE_SUBTITLE)}
            rightButtonProps={{
                endIcon: <ArrowForward></ArrowForward>,
                children: translate(CORE_TEXTS.GENERIC_CREATE),
                onClick: () => {
                    go(PATHS.DASHBOARD_STUDENT_CREATE)
                }
            }}
            loading={loading}
        >
            <StudentsDataTable students={students} onDelete={runService} onEdit={runService} showCourse={true}></StudentsDataTable>
        </DashboardTemplate>
    )
}

export default StudentsPage