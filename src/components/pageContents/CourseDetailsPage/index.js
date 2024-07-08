import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import useGetCourseService from "services/courses/useGetCourseService"
import { useEffect } from "react"
import { Grid } from "@mui/material"
import CourseDataCard from "components/dataDisplay/CourseDataCard"
import StudentsDataTable from "components/dataTables/StudentsDataTable"
import InputsList from "components/dataDisplay/InputsList"
import Card from "components/generic/Card"
import CORE_TEXTS from "constants/CORE_TEXTS"
import { Download } from "@mui/icons-material"

function CourseDetailsPage() {
    const { getCourse, getCourseXlsx } = useGetCourseService()
    const { runService, loading, value: course } = useService({ service: getCourse, defaultValue: {} })
    const { runService: getXlsx, loading: loadingXlsx } = useService({ service: getCourseXlsx, defaultValue: {} })
    const { params, goBack } = useNavigate()

    const handleClickDownloadXlsx = async () => {
        const file = await getXlsx(course.id)
        if (file) {
            const url = window.URL.createObjectURL(file)
            const a = document.createElement('a')
            a.href = url
            a.download = `${course.name}.xlsx`
            a.click()
        }
    }


    useEffect(() => {
        if (params.courseId) runService(params.courseId)
    }, [runService, params.courseId])

    const { translate } = useLocaleContext()
    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSE_PAGE_TITLE)}
            subtitle={translate(TEXTS.COURSE_PAGE_SUBTITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack
            }}
            rightButtonProps={{
                children: translate(CORE_TEXTS.DOWNLOAD_XLSX),
                onClick: handleClickDownloadXlsx,
                startIcon: <Download />,
                disabled: !course || loadingXlsx
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
                        <StudentsDataTable students={course?.students} editAllowed={false} deleteAllowed={false}></StudentsDataTable>
                    </Card>
                </Grid>
            </Grid>
        </DashboardTemplate >

    )
}

export default CourseDetailsPage