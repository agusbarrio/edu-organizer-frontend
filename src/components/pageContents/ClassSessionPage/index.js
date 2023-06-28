import { Grid } from "@mui/material"
import ClassSessionDataCard from "components/dataDisplay/ClassSessionDataCard"
import ClassSessionsStudentsTable from "components/dataTables/ClassSessionsStudentsTable"
import Card from "components/generic/Card"
import DashboardTemplate from "components/templates/DashboardTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetClassSessionService from "services/classSessions/useGetClassSessionService"

function ClassSessionPage() {
    const { getClassSession } = useGetClassSessionService()
    const { runService, loading, value: classSession } = useService({ service: getClassSession, defaultValue: {} })

    const { goBack, params } = useNavigate()

    useEffect(() => {
        if (params.classSessionId) runService(params.classSessionId)
    }, [runService, params.classSessionId])
    const { translate } = useLocaleContext()
    return (
        <DashboardTemplate
            title={translate(TEXTS.CLASS_SESSION_PAGE_TITLE)}
            subtitle={translate(TEXTS.CLASS_SESSION_PAGE_SUBTITLE)}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack
            }}
            loading={loading}
        >
            <Grid container spacing={2} sx={{ overflowY: 'auto', height: '100%' }}>
                <Grid item xs={12} md={4} maxHeight={'100%'}>
                    <ClassSessionDataCard classSession={classSession}></ClassSessionDataCard>
                </Grid>
                <Grid item xs={12} md={8} height={'100%'}>
                    <Card title={translate(TEXTS.CLASS_SESSION_STUDENTS_CARD_TITLE)}>
                        <ClassSessionsStudentsTable classSessionsStudents={classSession?.classSessionStudents} showCourse={false} showDate={false} showTotalPoints={false}></ClassSessionsStudentsTable>
                    </Card>
                </Grid>
            </Grid>
        </DashboardTemplate>

    )
}

export default ClassSessionPage