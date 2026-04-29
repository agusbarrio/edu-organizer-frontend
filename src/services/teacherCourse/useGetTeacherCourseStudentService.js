import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useGetTeacherCourseStudentService() {
  const { get } = useDecoredFetch();
  const getTeacherCourseStudent = useCallback(
    async (courseId, studentId) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.STUDENT, {
        courseId,
        studentId,
      });
      const result = await get(url, null, { showSuccessMessage: false });
      return result;
    },
    [get]
  );
  return { getTeacherCourseStudent };
}

export default useGetTeacherCourseStudentService;
