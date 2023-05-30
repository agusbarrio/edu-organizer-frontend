import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { AUTH_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from "utils/text"


function useCourseLoginService() {
  const { post } = useDecoredFetch();

  const courseLogin = useCallback(
    async (values) => {
      const result = await post(
        renderText(AUTH_ENDPOINTS.COURSE_LOGIN, { shortId: values.shortId }),
        values,
        {},
        { showSuccessMessage: false },
      );
      return result;
    },
    [post]
  );
  return { courseLogin };
}

export default useCourseLoginService;
