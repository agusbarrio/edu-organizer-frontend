import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { COURSE_ACCESS_ENDPOINTS } from 'constants/ENDPOINTS';

function useEditCourseStudentService() {
    const { put } = useDecoredFetch();
    const editCourseStudent = useCallback(
        async ({ studentId, ...values }) => {
            const result = await put(
                `${COURSE_ACCESS_ENDPOINTS.COURSE}/students/${studentId}`,
                values,
            );
            return result;
        },
        [put]
    );
    return { editCourseStudent };
}

export default useEditCourseStudentService;
