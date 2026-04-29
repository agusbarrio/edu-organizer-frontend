import { Box } from "@mui/material";
import DashboardTemplate from "components/templates/DashboardTemplate";
import CORE_TEXTS from "constants/CORE_TEXTS";
import PATHS from "constants/PATHS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useNavigate from "hooks/useNavigate";
import useService from "hooks/useService";
import ClassSessionMachine from "machines/ClassSessionMachine";
import { useEffect } from "react";
import useGetTeacherCourseService from "services/teacherCourse/useGetTeacherCourseService";
import { renderText } from "utils/text";

function TeacherCourseNewClassPage() {
    const { translate } = useLocaleContext();
    const { go, params } = useNavigate();
    const courseId = params.courseId;
    const { getTeacherCourse } = useGetTeacherCourseService();
    const { value: course, loading, runService } = useService({
        service: getTeacherCourse,
        defaultValue: null,
    });

    useEffect(() => {
        if (courseId) runService(courseId);
    }, [courseId, runService]);

    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSE_NEW_CLASS_PAGE_TITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: () => go(PATHS.DASHBOARD),
            }}
        >
            {!!course && (
                <Box sx={{ height: "100%", minHeight: 360 }}>
                    <ClassSessionMachine
                        course={course}
                        onFinish={() =>
                            go(renderText(PATHS.TEACHER_COURSE_CLASS_SESSIONS, { courseId }))
                        }
                        forTeacher
                        dashboardTeacher
                    />
                </Box>
            )}
        </DashboardTemplate>
    );
}

export default TeacherCourseNewClassPage;
