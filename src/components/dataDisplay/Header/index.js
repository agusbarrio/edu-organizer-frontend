import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountMenuButton from './components/AccountMenuButton';
import useSessionContext from 'hooks/useSessionContext';
import DrawerMenuButton from './components/DrawerMenuButton';
import useDevice from 'hooks/useDevice';
import HomeLinkIcon from 'components/navigation/HomeLinkIcon';

import { forwardRef, useMemo } from 'react';
import TEMPLATE_TYPES from 'constants/TEMPLATE_TYPES';
import { Box } from '@mui/material';

const Header = forwardRef(function Header({ onClickDrawerButton, type = TEMPLATE_TYPES.USER }, ref) {
    const { userSession: { token }, courseSession: { token: courseToken } } = useSessionContext()
    const { lessThanSm } = useDevice()
    const showHomeLink = useMemo(() => {
        if (type === TEMPLATE_TYPES.USER) {
            return !(lessThanSm && token)
        }
        if (type === TEMPLATE_TYPES.COURSE) {
            return true
        }
        return false
    }, [type, token, lessThanSm])
    const showDrawerButton = useMemo(() => {
        if (type === TEMPLATE_TYPES.USER) {
            return lessThanSm && token
        }
        return false
    }, [type, token, lessThanSm])

    const showAccountMenuButton = useMemo(() => {
        if (type === TEMPLATE_TYPES.USER) {
            return !!token
        }
        if (type === TEMPLATE_TYPES.COURSE) {
            return !!courseToken
        }
        return false
    }, [type, token, courseToken])

    return (
        <AppBar position="static" ref={ref}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box>
                    {showHomeLink && <HomeLinkIcon sx={{ color: 'inherit' }} type={type}></HomeLinkIcon>}
                    {showDrawerButton && <DrawerMenuButton onClick={onClickDrawerButton}></DrawerMenuButton>}
                </Box>
                <Box>
                    {showAccountMenuButton && (<AccountMenuButton type={type}></AccountMenuButton>)}
                </Box>
            </Toolbar>
        </AppBar>
    );
})

export default Header;