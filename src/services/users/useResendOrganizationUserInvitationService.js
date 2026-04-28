import { useCallback } from 'react';
import useDecoredFetch from 'hooks/useDecoredFetch';
import { USERS_ENDPOINTS } from 'constants/ENDPOINTS';
import { renderText } from 'utils/text';

function useResendOrganizationUserInvitationService() {
    const { post } = useDecoredFetch();
    const resendOrganizationUserInvitation = useCallback(
        async (userId, reqConfig) => {
            const result = await post(
                renderText(USERS_ENDPOINTS.ORGANIZATION_USER_RESEND_INVITATION, { userId }),
                {},
                reqConfig
            );
            return result;
        }, [post])

    return { resendOrganizationUserInvitation };
}

export default useResendOrganizationUserInvitationService;
