import DashboardTemplate from "components/templates/DashboardTemplate";
import CORE_TEXTS from "constants/CORE_TEXTS";
import PATHS from "constants/PATHS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useNavigate from "hooks/useNavigate";
import useService from "hooks/useService";
import StudentForm from "components/forms/StudentForm";
import { useCallback, useEffect, useMemo } from "react";
import useEditTeacherCourseStudentService from "services/teacherCourse/useEditTeacherCourseStudentService";
import useGetTeacherCourseStudentService from "services/teacherCourse/useGetTeacherCourseStudentService";
import useGetTeacherCourseService from "services/teacherCourse/useGetTeacherCourseService";
import { renderText } from "utils/text";
import { parseOptionalCalendarDateForForm, serializeOptionalDateOnlyForApi } from "utils/calendarDate";

function TeacherCourseEditStudentPage() {
    const { translate } = useLocaleContext();
    const { go, params } = useNavigate();
    const courseId = params.courseId;
    const studentId = params.studentId;
    const { getTeacherCourseStudent } = useGetTeacherCourseStudentService();
    const { getTeacherCourse } = useGetTeacherCourseService();
    const { editTeacherCourseStudent } = useEditTeacherCourseStudentService();

    const loadStudent = useCallback(
        async (id) => getTeacherCourseStudent(courseId, id),
        [courseId, getTeacherCourseStudent]
    );
    const { value: currentStudent, runService, loading: loadingStudent } = useService({
        service: loadStudent,
        defaultValue: null,
    });
    const { value: course, runService: runCourse, loading: loadingCourse } = useService({
        service: getTeacherCourse,
        defaultValue: null,
    });

    useEffect(() => {
        if (courseId) runCourse(courseId);
    }, [courseId, runCourse]);

    useEffect(() => {
        if (studentId && courseId) runService(studentId);
    }, [studentId, courseId, runService]);

    const handleSubmit = useCallback(
        async (data) => {
            const result = await editTeacherCourseStudent(courseId, studentId, {
                firstName: data.firstName,
                lastName: data.lastName,
                avatarFileId: data.avatar?.id || null,
                birthDate: serializeOptionalDateOnlyForApi(data.birthDate),
                additionalInfo: data.additionalInfo,
            });
            if (result) {
                go(renderText(PATHS.TEACHER_COURSE_STUDENTS, { courseId }));
            }
        },
        [courseId, studentId, editTeacherCourseStudent, go]
    );

    const defaultValues = useMemo(() => {
        if (!currentStudent) return undefined;
        return {
            ...currentStudent,
            birthDate: parseOptionalCalendarDateForForm(currentStudent.birthDate),
            avatar: currentStudent.avatar || null,
            course,
        };
    }, [course, currentStudent]);

    const loading = loadingStudent || loadingCourse;

    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSE_EDIT_STUDENT_PAGE_TITLE)}
            loading={loading}
            backButtonProps={{
                onClick: () =>
                    go(renderText(PATHS.TEACHER_COURSE_STUDENTS, { courseId })),
                children: translate(CORE_TEXTS.GENERIC_BACK),
            }}
        >
            {!!defaultValues && (
                <StudentForm
                    withCourse={false}
                    onSubmit={handleSubmit}
                    templateProps={{
                        submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_EDIT) },
                    }}
                    defaultValues={defaultValues}
                    showFilesInput={false}
                />
            )}
        </DashboardTemplate>
    );
}

export default TeacherCourseEditStudentPage;
