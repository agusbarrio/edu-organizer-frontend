import { ArrowForward } from "@mui/icons-material";
import CourseStudentsDataTable from "components/dataTables/CourseStudentsDataTable";
import DashboardTemplate from "components/templates/DashboardTemplate";
import CORE_TEXTS from "constants/CORE_TEXTS";
import PATHS from "constants/PATHS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useNavigate from "hooks/useNavigate";
import useService from "hooks/useService";
import { useCallback, useEffect, useMemo } from "react";
import useGetTeacherCourseStudentsService from "services/teacherCourse/useGetTeacherCourseStudentsService";
import useGetTeacherCourseService from "services/teacherCourse/useGetTeacherCourseService";
import { renderText } from "utils/text";

function TeacherCourseStudentsPage() {
    const { translate } = useLocaleContext();
    const { go, params } = useNavigate();
    const courseId = params.courseId;
    const { getTeacherCourseStudents } = useGetTeacherCourseStudentsService();
    const { getTeacherCourse } = useGetTeacherCourseService();
    const { value: students, runService: runStudents, loading: loadingStudents } = useService({
        service: getTeacherCourseStudents,
        defaultValue: [],
    });
    const { value: course, runService: runCourse, loading: loadingCourse } = useService({
        service: getTeacherCourse,
        defaultValue: null,
    });

    const loadAll = useCallback(() => {
        if (!courseId) return;
        runCourse(courseId);
        runStudents(courseId);
    }, [courseId, runCourse, runStudents]);

    useEffect(() => {
        loadAll();
    }, [loadAll]);

    const loading = loadingStudents || loadingCourse;

    const getEditStudentPath = useMemo(
        () => (studentId) =>
            renderText(PATHS.TEACHER_COURSE_EDIT_STUDENT, { courseId, studentId }),
        [courseId]
    );

    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSE_STUDENTS_PAGE_TITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: () => go(PATHS.DASHBOARD),
            }}
            rightButtonProps={{
                endIcon: <ArrowForward />,
                children: translate(CORE_TEXTS.GENERIC_CREATE),
                onClick: () =>
                    go(renderText(PATHS.TEACHER_COURSE_NEW_STUDENT, { courseId })),
            }}
        >
            <CourseStudentsDataTable
                students={students}
                getEditStudentPath={getEditStudentPath}
                getViewStudentPath={(studentId) =>
                    renderText(PATHS.TEACHER_COURSE_STUDENT, { courseId, studentId })
                }
            />
        </DashboardTemplate>
    );
}

export default TeacherCourseStudentsPage;
