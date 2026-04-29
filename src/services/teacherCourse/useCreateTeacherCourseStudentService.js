import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useCreateTeacherCourseStudentService() {
  const { post } = useDecoredFetch();
  const createTeacherCourseStudent = useCallback(
    async (courseId, body) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.STUDENTS, { courseId });
      const result = await post(url, body);
      return result;
    },
    [post]
  );
  return { createTeacherCourseStudent };
}

export default useCreateTeacherCourseStudentService;
