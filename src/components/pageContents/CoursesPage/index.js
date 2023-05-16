import ABTemplate from "components/templates/ABTemplate"
import DashboardTemplate from "components/templates/DashboardTemplate"
import LoadingBackdrop from "components/generic/LoadingBackdrop"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllCoursesService from "services/courses/useGetAllCoursesService"
import CoursesDataTable from "components/dataTables/CoursesDataTable"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"

function CoursesPage() {
    const { getAllCourses } = useGetAllCoursesService()
    const { translate } = useLocaleContext()
    const { value: courses, runService } = useService({ service: getAllCourses, defeaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])

    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSES_PAGE_TITLE)}
            subtitle={translate(TEXTS.COURSES_PAGE_SUBTITLE)}
        >
            <CoursesDataTable courses={courses}></CoursesDataTable>
        </DashboardTemplate>
    )
}

export default CoursesPage