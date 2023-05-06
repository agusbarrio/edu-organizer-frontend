
import { useCallback } from 'react';
import useSessionContext from 'hooks/useSessionContext';
import _ from 'lodash';
import PATHS from 'constants/PATHS';

function useSecurity() {
    const { loggedIn, userPermissions: userPermissionsContext, loggedInWithPin } = useSessionContext()
    const getAccessData = useCallback(
        ({ needUserSession, userPermissions, needPinSession }) => {
            let canAccess = true;
            let redirectPath = null;
            if (needUserSession != undefined) {
                if (needUserSession && !loggedIn) {
                    canAccess = false;
                    redirectPath = PATHS.LOGIN
                };
                if (!needUserSession && loggedIn) {
                    canAccess = false;
                    redirectPath = PATHS.DASHBOARD
                }
                if (!!userPermissions && userPermissions.some((permission) => !userPermissionsContext?.includes(permission))) {
                    canAccess = false;
                    redirectPath = PATHS.LOGIN
                }
            }
            if (needPinSession != undefined) {
                if (needPinSession && !loggedInWithPin) {
                    canAccess = false;
                    redirectPath = PATHS.LOGIN_PIN
                };
                if (!needPinSession && loggedInWithPin) {
                    canAccess = false;
                    redirectPath = PATHS.COURSE
                }
            }

            return { canAccess, redirectPath, }
        },
        [loggedIn, loggedInWithPin, userPermissionsContext]
    );

    return { getAccessData };
}

export default useSecurity;