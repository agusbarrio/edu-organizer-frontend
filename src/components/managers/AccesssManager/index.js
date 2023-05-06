import { useMemo } from 'react';
import Redirect from 'components/navigation/Redirect';
import useSecurity from 'hooks/useSecurity';

function AccessManager({ children, needUserSession, userPermissions, needPinSession }) {
    const { getAccessData } = useSecurity();

    const { canAccess, redirectPath } = useMemo(
        () => getAccessData({ needUserSession, userPermissions, needPinSession }),
        [needUserSession, userPermissions, needPinSession, getAccessData]
    );

    return <>{!canAccess ? <Redirect url={redirectPath}></Redirect> : children}</>
}

export default AccessManager;
