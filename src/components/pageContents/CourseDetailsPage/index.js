import DashboardTemplate from "components/templates/DashboardTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { renderText } from "utils/text"
import useService from "hooks/useService"
import useGetCourseService from "services/courses/useGetCourseService"
import { useEffect } from "react"
import { Grid } from "@mui/material"
import CourseDataCard from "components/dataDisplay/CourseDataCard"
import StudentsDataTable from "components/dataTables/StudentsDataTable"
import InputsList from "components/dataDisplay/InputsList"
import Card from "components/generic/Card"

function CourseDetailsPage() {
    const { getCourse } = useGetCourseService()
    const { runService, loading, value: course } = useService({ service: getCourse, defaultValue: {} })
    const { params } = useNavigate()

    useEffect(() => {
        if (params.courseId) runService(params.courseId)
    }, [runService, params.courseId])

    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSE_PAGE_TITLE)}
            subtitle={translate(TEXTS.COURSE_PAGE_SUBTITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_COURSES),
                onClick: () => go(renderText(PATHS.DASHBOARD_COURSES))
            }}
        >
            <Grid container spacing={2} sx={{ overflowY: 'auto', height: '100%' }}>
                <Grid item xs={12} md={6}>
                    <CourseDataCard course={course}></CourseDataCard>
                </Grid>
                <Grid item xs={12} md={6} >
                    <InputsList inputs={course?.studentAttendanceFormData} cardTitle={translate(TEXTS.STUDENT_ATTENDANCE_FORM_LABEL)}></InputsList>
                </Grid>
                <Grid item sx={{ height: '100%' }} xs={12}>
                    <Card title={translate(TEXTS.COURSE_STUDENTS_LIST_CARD_TITLE)}>
                        <StudentsDataTable students={course?.students}></StudentsDataTable>
                    </Card>
                </Grid>
            </Grid>
        </DashboardTemplate >

    )
}

export default CourseDetailsPage