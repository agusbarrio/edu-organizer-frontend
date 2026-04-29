import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { TEACHER_COURSE_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useEditTeacherClassSessionService() {
  const { put } = useDecoredFetch();
  const editTeacherClassSession = useCallback(
    async (courseId, classSessionId, body) => {
      const url = renderText(TEACHER_COURSE_ENDPOINTS.CLASS_SESSION, {
        courseId,
        classSessionId,
      });
      const result = await put(url, body);
      return result;
    },
    [put]
  );
  return { editTeacherClassSession };
}

export default useEditTeacherClassSessionService;
