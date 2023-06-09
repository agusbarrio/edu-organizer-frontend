import DashboardTemplate from "components/templates/DashboardTemplate"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllCoursesService from "services/courses/useGetAllCoursesService"
import CoursesDataTable from "components/dataTables/CoursesDataTable"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import CORE_TEXTS from "constants/CORE_TEXTS"
import useNavigate from "hooks/useNavigate"
import PATHS from "constants/PATHS"
import { ArrowForward } from "@mui/icons-material"

function CoursesPage() {
    const { getAllCourses } = useGetAllCoursesService()
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { value: courses, runService, loading } = useService({ service: getAllCourses, defaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])

    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSES_PAGE_TITLE)}
            subtitle={translate(TEXTS.COURSES_PAGE_SUBTITLE)}
            rightButtonProps={{
                endIcon: <ArrowForward></ArrowForward>,
                children: translate(CORE_TEXTS.GENERIC_CREATE),
                onClick: () => {
                    go(PATHS.DASHBOARD_COURSE_CREATE)
                }
            }}
            loading={loading}
        >
            <CoursesDataTable courses={courses} onDelete={runService} onEdit={runService}></CoursesDataTable>
        </DashboardTemplate>
    )
}

export default CoursesPage