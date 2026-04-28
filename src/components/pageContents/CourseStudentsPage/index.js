import CourseStudentsDataTable from "components/dataTables/CourseStudentsDataTable"
import CourseTemplate from "components/templates/CourseTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetCourseStudentsService from "services/courseAccess/useGetCourseStudentsService"

function CourseStudentsPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { getCourseStudents } = useGetCourseStudentsService()
    const { value: students, runService, loading } = useService({ service: getCourseStudents, defaultValue: [] })

    useEffect(() => {
        runService()
    }, [runService])

    return (
        <CourseTemplate
            title={translate(TEXTS.COURSE_STUDENTS_PAGE_TITLE)}
            loading={loading}
            backButtonProps={{ onClick: () => go(PATHS.COURSE), children: translate(CORE_TEXTS.GENERIC_BACK) }}
        >
            <CourseStudentsDataTable students={students} />
        </CourseTemplate>
    )
}

export default CourseStudentsPage
