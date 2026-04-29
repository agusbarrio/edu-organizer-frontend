import { Box } from "@mui/material";
import DashboardTemplate from "components/templates/DashboardTemplate";
import CORE_TEXTS from "constants/CORE_TEXTS";
import PATHS from "constants/PATHS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useNavigate from "hooks/useNavigate";
import useService from "hooks/useService";
import ClassSessionMachine from "machines/ClassSessionMachine";
import moment from "moment";
import { useCallback, useEffect, useMemo } from "react";
import useGetTeacherClassSessionService from "services/teacherCourse/useGetTeacherClassSessionService";
import { renderText } from "utils/text";

function TeacherCourseEditClassSessionPage() {
    const { translate } = useLocaleContext();
    const { go, goBack, params } = useNavigate();
    const courseId = params.courseId;
    const classSessionId = params.classSessionId;

    const { getTeacherClassSession } = useGetTeacherClassSessionService();
    const loadSession = useCallback(
        async (id) => getTeacherClassSession(courseId, id),
        [courseId, getTeacherClassSession]
    );
    const { value: classSession, loading, runService } = useService({
        service: loadSession,
        defaultValue: null,
    });

    useEffect(() => {
        if (classSessionId && courseId) runService(classSessionId);
    }, [classSessionId, courseId, runService]);

    const goClassSessions = useCallback(() => {
        go(renderText(PATHS.TEACHER_COURSE_CLASS_SESSIONS, { courseId }));
    }, [go, courseId]);

    const initialContext = useMemo(
        () =>
            classSession
                ? {
                    course: classSession?.course,
                    date: moment(classSession?.date),
                    id: classSession?.id,
                    presentStudentsIds: classSession?.classSessionStudents
                        ?.filter((row) => row.isPresent)
                        .map((row) => row.studentId),
                    presentStudentsData: classSession?.classSessionStudents
                        ?.filter((row) => row.isPresent)
                        .map((row) => ({
                            ...row,
                            metadata: row.metadata,
                            id: row.studentId,
                        })),
                }
                : null,
        [classSession]
    );

    return (
        <DashboardTemplate
            title={translate(TEXTS.EDIT_CLASS_SESSION_PAGE_TITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack,
            }}
        >
            {!!initialContext && (
                <Box sx={{ height: "100%", minHeight: 360 }}>
                    <ClassSessionMachine
                        onFinish={goClassSessions}
                        edit
                        initialContext={initialContext}
                        forTeacher
                        dashboardTeacher
                    />
                </Box>
            )}
        </DashboardTemplate>
    );
}

export default TeacherCourseEditClassSessionPage;
