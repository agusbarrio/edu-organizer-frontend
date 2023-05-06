import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useMemo, useState } from 'react';
import useLocaleContext from 'hooks/useLocaleContext';
import TEXTS from 'constants/TEXTS';
import LogoutMenuButton from '../LogoutMenuButton';

function AccountMenuButton() {
    const { translate } = useLocaleContext()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = useMemo(() => Boolean(anchorEl), [anchorEl])
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title={translate(TEXTS.ACCOUNT_BUTTON_TOOLTIP)}>
                    <IconButton
                        onClick={handleClick}
                        color='inherit'
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <AccountCircle></AccountCircle>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <LogoutMenuButton></LogoutMenuButton>
            </Menu>
        </>
    );
}

export default AccountMenuButton