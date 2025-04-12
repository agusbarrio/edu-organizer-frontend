import CourseTemplate from "components/templates/CourseTemplate"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import useNavigate from "hooks/useNavigate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import CourseClassSessionsTable from "components/dataTables/CourseClassSessionsTable"
import useService from "hooks/useService"
import useGetClassSessionsCourse from "services/courseAccess/useGetClassSessionsCourse"
import { useEffect } from "react"

function CourseClassSessionsPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()


    const { getClassSessionsCourse } = useGetClassSessionsCourse()
    const { value: classSessions, runService, loading } = useService({ service: getClassSessionsCourse, defaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])


    return (
        <CourseTemplate title={translate(TEXTS.COURSE_CLASS_SESSIONS_PAGE_TITLE)} backButtonProps={{ onClick: () => go(PATHS.COURSE), children: translate(CORE_TEXTS.GENERIC_BACK) }} loading={loading}>
            <CourseClassSessionsTable classSessions={classSessions} onDelete={runService}></CourseClassSessionsTable>
        </CourseTemplate>
    )
}

export default CourseClassSessionsPage