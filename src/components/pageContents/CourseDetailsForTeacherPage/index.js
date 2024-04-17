import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { Grid } from "@mui/material"
import CourseDataCard from "components/dataDisplay/CourseDataCard"
import StudentsDataTable from "components/dataTables/StudentsDataTable"
import InputsList from "components/dataDisplay/InputsList"
import Card from "components/generic/Card"
import CORE_TEXTS from "constants/CORE_TEXTS"
import CourseTemplate from "components/templates/CourseTemplate"
import useSessionContext from "hooks/useSessionContext"

function CourseDetailsForTeacherPage() {
    const { translate } = useLocaleContext()
    const { course } = useSessionContext()


    return (
        <CourseTemplate
            title={translate(TEXTS.COURSE_PAGE_TITLE)}
            subtitle={translate(TEXTS.COURSE_PAGE_SUBTITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack
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
        </CourseTemplate >

    )
}

export default CourseDetailsForTeacherPage