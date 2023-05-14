import DashboardTemplate from "components/templates/DashboardTemplate"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllStudentsService from "services/students/useGetAllStudentsService"
import StudentsDataTable from "components/dataTables/StudentsDataTable"

function StudentsPage() {
    const { getAllStudents } = useGetAllStudentsService()
    const { value: students, runService } = useService({ service: getAllStudents, defeaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])

    return (
        <DashboardTemplate>
            <StudentsDataTable students={students}></StudentsDataTable>
        </DashboardTemplate>
    )
}

export default StudentsPage