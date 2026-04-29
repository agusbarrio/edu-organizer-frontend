import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useTeacherNewClassService() {
  const { post } = useDecoredFetch();
  const createTeacherNewClass = useCallback(
    async (courseId, body) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.NEW_CLASS, { courseId });
      const result = await post(url, body);
      return result;
    },
    [post]
  );
  return { createTeacherNewClass };
}

export default useTeacherNewClassService;
