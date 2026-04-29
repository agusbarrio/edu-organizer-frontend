import DashboardTemplate from "components/templates/DashboardTemplate";
import CORE_TEXTS from "constants/CORE_TEXTS";
import PATHS from "constants/PATHS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useNavigate from "hooks/useNavigate";
import useService from "hooks/useService";
import StudentForm from "components/forms/StudentForm";
import { useCallback, useEffect } from "react";
import useCreateTeacherCourseStudentService from "services/teacherCourse/useCreateTeacherCourseStudentService";
import useGetTeacherCourseService from "services/teacherCourse/useGetTeacherCourseService";
import { renderText } from "utils/text";

function TeacherCourseNewStudentPage() {
    const { translate } = useLocaleContext();
    const { go, params } = useNavigate();
    const courseId = params.courseId;
    const { getTeacherCourse } = useGetTeacherCourseService();
    const { createTeacherCourseStudent } = useCreateTeacherCourseStudentService();
    const { value: course, loading, runService } = useService({
        service: getTeacherCourse,
        defaultValue: null,
    });

    useEffect(() => {
        if (courseId) runService(courseId);
    }, [courseId, runService]);

    const handleSubmit = useCallback(
        async (data) => {
            const result = await createTeacherCourseStudent(courseId, {
                firstName: data.firstName,
                lastName: data.lastName,
                avatarFileId: data.avatar?.id || null,
                birthDate: data.birthDate,
                additionalInfo: data.additionalInfo,
            });
            if (result) {
                go(renderText(PATHS.TEACHER_COURSE_STUDENTS, { courseId }));
            }
        },
        [createTeacherCourseStudent, courseId, go]
    );

    return (
        <DashboardTemplate
            title={translate(TEXTS.COURSE_NEW_STUDENT_PAGE_TITLE)}
            loading={loading}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: () => go(renderText(PATHS.TEACHER_COURSE_STUDENTS, { courseId })),
            }}
        >
            {!!course && (
                <StudentForm
                    withCourse={false}
                    onSubmit={handleSubmit}
                    templateProps={{
                        submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_ADD) },
                    }}
                    defaultValues={{ course }}
                    showFilesInput={false}
                />
            )}
        </DashboardTemplate>
    );
}

export default TeacherCourseNewStudentPage;
