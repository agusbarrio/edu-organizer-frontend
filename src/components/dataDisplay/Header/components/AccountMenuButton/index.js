import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useMemo, useState } from 'react';
import useLocaleContext from 'hooks/useLocaleContext';
import TEXTS from 'constants/TEXTS';
import LogoutMenuButton from '../LogoutMenuButton';
import IconButton from 'components/generic/IconButton';
import MyAccountMenuButton from '../MyAccountMenuButton';
import TEMPLATE_TYPES from 'constants/TEMPLATE_TYPES';

function AccountMenuButton({ type }) {
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
            <IconButton
                tooltip={translate(TEXTS.ACCOUNT_BUTTON_TOOLTIP)}
                onClick={handleClick}
                color='inherit'
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <AccountCircle></AccountCircle>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {type === TEMPLATE_TYPES.USER && <MyAccountMenuButton></MyAccountMenuButton>}
                <LogoutMenuButton></LogoutMenuButton>
            </Menu>
        </>
    );
}

export default AccountMenuButton