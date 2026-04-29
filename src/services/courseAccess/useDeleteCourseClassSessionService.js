import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useDeleteCourseClassSessionService() {
  const { del } = useDecoredFetch();
  const deleteCourseClassSession = useCallback(
    async (classSessionId) => {
      const result = await del(
        `${COURSE_ACCESS_ENDPOINTS.COURSE}/classSessions/${classSessionId}`
      );
      return result;
    },
    [del]
  );
  return { deleteCourseClassSession };
}

export default useDeleteCourseClassSessionService;
