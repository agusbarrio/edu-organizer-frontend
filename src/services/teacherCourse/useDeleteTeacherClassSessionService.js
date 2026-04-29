import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useDeleteTeacherClassSessionService() {
  const { del } = useDecoredFetch();
  const deleteTeacherClassSession = useCallback(
    async (courseId, classSessionId) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.CLASS_SESSION, {
        courseId,
        classSessionId,
      });
      const result = await del(url);
      return result;
    },
    [del]
  );
  return { deleteTeacherClassSession };
}

export default useDeleteTeacherClassSessionService;
