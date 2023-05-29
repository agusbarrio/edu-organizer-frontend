import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountMenuButton from './components/AccountMenuButton';
import useSessionContext from 'hooks/useSessionContext';
import DrawerMenuButton from './components/DrawerMenuButton';
import useDevice from 'hooks/useDevice';
import HomeLinkIcon from 'components/navigation/HomeLinkIcon';

function Header({ innerRef, onClickDrawerButton }) {
    const { user: { logged } } = useSessionContext()
    const { lessThanSm } = useDevice()
    return (
        <AppBar position="static" ref={innerRef}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {!(lessThanSm && logged) && <HomeLinkIcon sx={{ color: 'inherit' }}></HomeLinkIcon>}
                {lessThanSm && logged && <DrawerMenuButton onClick={onClickDrawerButton}></DrawerMenuButton>}
                {logged && (<AccountMenuButton></AccountMenuButton>)}
            </Toolbar>
        </AppBar>
    );
}

export default Header;