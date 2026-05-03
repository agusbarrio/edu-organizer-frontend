import { Grid } from "@mui/material"
import StudentDataCard from "components/dataDisplay/StudentDataCard"
import ClassSessionsStudentsTable from "components/dataTables/ClassSessionsStudentsTable"
import Card from "components/generic/Card"
import DashboardTemplate from "components/templates/DashboardTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import { useCallback, useEffect } from "react"
import useGetTeacherCourseStudentService from "services/teacherCourse/useGetTeacherCourseStudentService"
import { renderText } from "utils/text"

function TeacherCourseStudentPage() {
    const { translate } = useLocaleContext()
    const { go, params } = useNavigate()
    const courseId = params.courseId
    const studentId = params.studentId
    const { getTeacherCourseStudent } = useGetTeacherCourseStudentService()

    const loadStudent = useCallback(
        async () => getTeacherCourseStudent(courseId, studentId),
        [courseId, studentId, getTeacherCourseStudent]
    )

    const { runService, loading, value: student } = useService({ service: loadStudent, defaultValue: {} })

    useEffect(() => {
        if (courseId && studentId) runService()
    }, [courseId, studentId, runService])

    return (
        <DashboardTemplate
            title={translate(TEXTS.STUDENT_PAGE_TITLE)}
            subtitle={translate(TEXTS.STUDENT_PAGE_SUBTITLE)}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: () => go(renderText(PATHS.TEACHER_COURSE_STUDENTS, { courseId })),
            }}
            loading={loading}
        >
            <Grid container spacing={2} sx={{ overflowY: "auto", height: "100%" }}>
                <Grid item xs={12} md={4} maxHeight={"100%"}>
                    <StudentDataCard student={student}></StudentDataCard>
                </Grid>
                <Grid item xs={12} md={8} height={"100%"}>
                    <Card title={translate(TEXTS.STUDENT_ATTENDANCE_CARD_TITLE)}>
                        <ClassSessionsStudentsTable
                            classSessionsStudents={student?.classSessionsStudent}
                            showStudent={false}
                            course={student?.course}
                        ></ClassSessionsStudentsTable>
                    </Card>
                </Grid>
            </Grid>
        </DashboardTemplate>
    )
}

export default TeacherCourseStudentPage
