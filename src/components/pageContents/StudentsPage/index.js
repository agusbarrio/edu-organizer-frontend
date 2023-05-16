import DashboardTemplate from "components/templates/DashboardTemplate"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllStudentsService from "services/students/useGetAllStudentsService"
import StudentsDataTable from "components/dataTables/StudentsDataTable"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"

function StudentsPage() {
    const { getAllStudents } = useGetAllStudentsService()
    const { translate } = useLocaleContext()
    const { value: students, runService } = useService({ service: getAllStudents, defeaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])

    return (
        <DashboardTemplate
            title={translate(TEXTS.STUDENTS_PAGE_TITLE)}
            subtitle={translate(TEXTS.STUDENTS_PAGE_SUBTITLE)}
        >
            <StudentsDataTable students={students}></StudentsDataTable>
        </DashboardTemplate>
    )
}

export default StudentsPage