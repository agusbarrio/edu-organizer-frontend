import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';

function useTeacherCoursesListService() {
  const { get } = useDecoredFetch();
  const listTeacherCourses = useCallback(async () => {
    const result = await get(TEACHER_COURSE_ENDPOINTS.COURSES, null, {
      showSuccessMessage: false,
    });
    return result;
  }, [get]);
  return { listTeacherCourses };
}

export default useTeacherCoursesListService;
