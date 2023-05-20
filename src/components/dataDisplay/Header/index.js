import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SchoolIcon from '@mui/icons-material/School';
import AccountMenuButton from './components/AccountMenuButton';
import useSessionContext from 'hooks/useSessionContext';
import PATHS from 'constants/PATHS';
import Link from 'components/generic/Link';
import DrawerMenuButton from './components/DrawerMenuButton';
import useDevice from 'hooks/useDevice';
import HomeLinkIcon from 'components/navigation/HomeLinkIcon';

function Header({ innerRef, onClickDrawerButton }) {
    const { user: { logged } } = useSessionContext()
    const { isSm } = useDevice()
    return (
        <AppBar position="static" ref={innerRef}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {!isSm && <HomeLinkIcon sx={{ color: 'inherit' }}></HomeLinkIcon>}
                {isSm && <DrawerMenuButton onClick={onClickDrawerButton}></DrawerMenuButton>}
                {logged && (<AccountMenuButton></AccountMenuButton>)}
            </Toolbar>
        </AppBar>
    );
}

export default Header;