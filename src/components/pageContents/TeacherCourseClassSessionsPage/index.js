import { ArrowForward } from "@mui/icons-material";
import DashboardTemplate from "components/templates/DashboardTemplate";
import CORE_TEXTS from "constants/CORE_TEXTS";
import PATHS from "constants/PATHS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useNavigate from "hooks/useNavigate";
import useService from "hooks/useService";
import CourseClassSessionsTable from "components/dataTables/CourseClassSessionsTable";
import { useCallback, useEffect, useMemo } from "react";
import useGetTeacherClassSessionsService from "services/teacherCourse/useGetTeacherClassSessionsService";
import useGetTeacherCourseService from "services/teacherCourse/useGetTeacherCourseService";
import useDeleteTeacherClassSessionService from "services/teacherCourse/useDeleteTeacherClassSessionService";
import { renderText } from "utils/text";

function TeacherCourseClassSessionsPage() {
    const { translate } = useLocaleContext();
    const { go, params } = useNavigate();
    const courseId = params.courseId;
    const { getTeacherClassSessions } = useGetTeacherClassSessionsService();
    const { getTeacherCourse } = useGetTeacherCourseService();
    const { deleteTeacherClassSession } = useDeleteTeacherClassSessionService();
    const { value: classSessions, runService: runSessions, loading: loadingSessions } =
        useService({ service: getTeacherClassSessions, defaultValue: [] });
    const { value: course, runService: runCourse, loading: loadingCourse } = useService({
        service: getTeacherCourse,
        defaultValue: null,
    });

    const loadAll = useCallback(() => {
        if (!courseId) return;
        runCourse(courseId);
        runSessions(courseId);
    }, [courseId, runCourse, runSessions]);

    useEffect(() => {
        loadAll();
    }, [loadAll]);

    const deleteForCourse = useCallback(
        (classSessionId) => deleteTeacherClassSession(courseId, classSessionId),
        [courseId, deleteTeacherClassSession]
    );

    const getViewPath = useMemo(
        () => (id) =>
            renderText(PATHS.TEACHER_COURSE_CLASS_SESSION, { courseId, classSessionId: id }),
        [courseId]
    );

    const getEditPath = useMemo(
        () => (id) =>
            renderText(PATHS.TEACHER_COURSE_CLASS_SESSION_EDIT, {
                courseId,
                classSessionId: id,
            }),
        [courseId]
    );

    const loading = loadingSessions || loadingCourse;

    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSE_CLASS_SESSIONS_PAGE_TITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: () => go(PATHS.DASHBOARD),
            }}
            rightButtonProps={{
                endIcon: <ArrowForward />,
                children: translate(CORE_TEXTS.GENERIC_CREATE),
                onClick: () =>
                    go(renderText(PATHS.TEACHER_COURSE_NEW_CLASS, { courseId })),
            }}
        >
            <CourseClassSessionsTable
                classSessions={classSessions}
                onDelete={loadAll}
                deleteClassSession={deleteForCourse}
                getViewPath={getViewPath}
                getEditPath={getEditPath}
            />
        </DashboardTemplate>
    );
}

export default TeacherCourseClassSessionsPage;
