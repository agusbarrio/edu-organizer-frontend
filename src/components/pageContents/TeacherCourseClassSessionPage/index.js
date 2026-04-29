import { Grid } from "@mui/material";
import ClassSessionDataCard from "components/dataDisplay/ClassSessionDataCard";
import ClassSessionsStudentsTable from "components/dataTables/ClassSessionsStudentsTable";
import Card from "components/generic/Card";
import DashboardTemplate from "components/templates/DashboardTemplate";
import CORE_TEXTS from "constants/CORE_TEXTS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useNavigate from "hooks/useNavigate";
import useService from "hooks/useService";
import { useCallback, useEffect } from "react";
import useGetTeacherClassSessionService from "services/teacherCourse/useGetTeacherClassSessionService";

function TeacherCourseClassSessionPage() {
    const { getTeacherClassSession } = useGetTeacherClassSessionService();
    const { goBack, params } = useNavigate();
    const courseId = params.courseId;
    const classSessionId = params.classSessionId;

    const loadSession = useCallback(
        async (id) => getTeacherClassSession(courseId, id),
        [courseId, getTeacherClassSession]
    );

    const { runService, loading, value: classSession } = useService({
        service: loadSession,
        defaultValue: {},
    });

    useEffect(() => {
        if (classSessionId && courseId) runService(classSessionId);
    }, [classSessionId, courseId, runService]);

    const { translate } = useLocaleContext();

    return (
        <DashboardTemplate
            title={translate(TEXTS.CLASS_SESSION_PAGE_TITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack,
            }}
        >
            <Grid container spacing={2} sx={{ overflowY: "auto", height: "100%" }}>
                <Grid item xs={12} md={4} maxHeight={"100%"}>
                    <ClassSessionDataCard classSession={classSession} />
                </Grid>
                <Grid item xs={12} md={8} height={"100%"}>
                    <Card title={translate(TEXTS.CLASS_SESSION_STUDENTS_CARD_TITLE)}>
                        <ClassSessionsStudentsTable
                            classSessionsStudents={classSession?.classSessionStudents}
                            showCourse={false}
                            showDate={false}
                            showTotalPoints={false}
                            showMonth={false}
                            course={classSession?.course}
                        />
                    </Card>
                </Grid>
            </Grid>
        </DashboardTemplate>
    );
}

export default TeacherCourseClassSessionPage;
