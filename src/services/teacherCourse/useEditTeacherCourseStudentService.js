import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useEditTeacherCourseStudentService() {
  const { put } = useDecoredFetch();
  const editTeacherCourseStudent = useCallback(
    async (courseId, studentId, body) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.STUDENT, {
        courseId,
        studentId,
      });
      const result = await put(url, body);
      return result;
    },
    [put]
  );
  return { editTeacherCourseStudent };
}

export default useEditTeacherCourseStudentService;
