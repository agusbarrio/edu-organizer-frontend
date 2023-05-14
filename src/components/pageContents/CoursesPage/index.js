import ABTemplate from "components/templates/ABTemplate"
import DashboardTemplate from "components/templates/DashboardTemplate"
import LoadingBackdrop from "components/generic/LoadingBackdrop"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllCoursesService from "services/courses/useGetAllCoursesService"
import CoursesDataTable from "components/dataTables/CoursesDataTable"

function CoursesPage() {
    const { getAllCourses } = useGetAllCoursesService()
    const { value: courses, runService } = useService({ service: getAllCourses, defeaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])

    return (
        <DashboardTemplate>
            <CoursesDataTable courses={courses}></CoursesDataTable>
        </DashboardTemplate>
    )
}

export default CoursesPage