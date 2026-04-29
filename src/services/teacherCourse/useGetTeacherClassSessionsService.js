import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useGetTeacherClassSessionsService() {
  const { get } = useDecoredFetch();
  const getTeacherClassSessions = useCallback(
    async (courseId) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.CLASS_SESSIONS, {
        courseId,
      });
      const result = await get(url, null, { showSuccessMessage: false });
      return result;
    },
    [get]
  );
  return { getTeacherClassSessions };
}

export default useGetTeacherClassSessionsService;
