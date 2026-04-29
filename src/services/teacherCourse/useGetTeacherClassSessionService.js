import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useGetTeacherClassSessionService() {
  const { get } = useDecoredFetch();
  const getTeacherClassSession = useCallback(
    async (courseId, classSessionId) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.CLASS_SESSION, {
        courseId,
        classSessionId,
      });
      const result = await get(url, null, { showSuccessMessage: false });
      return result;
    },
    [get]
  );
  return { getTeacherClassSession };
}

export default useGetTeacherClassSessionService;
