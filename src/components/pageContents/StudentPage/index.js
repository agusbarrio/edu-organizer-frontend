import { Grid } from "@mui/material"
import StudentDataCard from "components/dataDisplay/StudentDataCard"
import ClassSessionsStudentTable from "components/dataTables/ClassSessionsStudentTable"
import Card from "components/generic/Card"
import LabelValue from "components/generic/LabelValue"
import DashboardTemplate from "components/templates/DashboardTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetStudentService from "services/students/useGetStudentService"
import { renderText } from "utils/text"

function StudentPage() {
    const { getStudent } = useGetStudentService()
    const { runService, loading, value: student } = useService({ service: getStudent, defaultValue: {} })
    const { goBack, params } = useNavigate()

    useEffect(() => {
        if (params.studentId) runService(params.studentId)
    }, [runService, params.studentId])
    const { translate } = useLocaleContext()
    return (
        <DashboardTemplate
            title={translate(TEXTS.STUDENT_PAGE_TITLE)}
            subtitle={translate(TEXTS.STUDENT_PAGE_SUBTITLE)}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack
            }}
            loading={loading}
        >
            <Grid container spacing={2} sx={{ overflowY: 'auto', height: '100%' }}>
                <Grid item xs={12} md={4} maxHeight={'100%'}>
                    <StudentDataCard student={student}></StudentDataCard>
                </Grid>
                <Grid item xs={12} md={8} height={'100%'}>
                    <Card title={translate(TEXTS.STUDENT_ATTENDANCE_CARD_TITLE)}>
                        <ClassSessionsStudentTable classSessionsStudent={student?.classSessionsStudent}></ClassSessionsStudentTable>
                    </Card>
                </Grid>
            </Grid>
        </DashboardTemplate>

    )
}

export default StudentPage