
import { useCallback } from 'react';
import useSessionContext from 'hooks/useSessionContext';
import _ from 'lodash';
import PATHS from 'constants/PATHS';

function useSecurity() {
    const { session } = useSessionContext()

    const getAccessData = useCallback(
        ({ needUserSession, userPermissions, needPinSession }) => {
            let canAccess = true;
            let redirectPath = null;
            if (needUserSession != undefined) {
                if (needUserSession && !session?.loggedIn) {
                    canAccess = false;
                    redirectPath = PATHS.LOGIN
                };
                if (!needUserSession && session?.loggedIn) {
                    canAccess = false;
                    redirectPath = PATHS.DASHBOARD
                }
                if (!!userPermissions && userPermissions.some((permission) => !session?.userPermissions?.includes(permission))) {
                    canAccess = false;
                    redirectPath = PATHS.LOGIN
                }
            }
            if (needPinSession != undefined) {
                if (needPinSession && !session?.loggedInWithPin) {
                    canAccess = false;
                    redirectPath = PATHS.LOGIN_PIN
                };
                if (!needPinSession && session?.loggedInWithPin) {
                    canAccess = false;
                    redirectPath = PATHS.COURSE
                }
            }

            return { canAccess, redirectPath, }
        },
        [session]
    );

    return { getAccessData, };
}

export default useSecurity;