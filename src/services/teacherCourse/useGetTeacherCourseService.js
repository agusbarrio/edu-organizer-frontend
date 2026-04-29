import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useGetTeacherCourseService() {
  const { get } = useDecoredFetch();
  const getTeacherCourse = useCallback(
    async (courseId) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.COURSE, { courseId });
      const result = await get(url, null, { showSuccessMessage: false });
      return result;
    },
    [get]
  );
  return { getTeacherCourse };
}

export default useGetTeacherCourseService;
