import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useGetTeacherCourseStudentsService() {
  const { get } = useDecoredFetch();
  const getTeacherCourseStudents = useCallback(
    async (courseId) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.STUDENTS, { courseId });
      const result = await get(url, null, { showSuccessMessage: false });
      return result;
    },
    [get]
  );
  return { getTeacherCourseStudents };
}

export default useGetTeacherCourseStudentsService;
