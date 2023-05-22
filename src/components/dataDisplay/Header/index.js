import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountMenuButton from './components/AccountMenuButton';
import useSessionContext from 'hooks/useSessionContext';
import DrawerMenuButton from './components/DrawerMenuButton';
import useDevice from 'hooks/useDevice';
import HomeLinkIcon from 'components/navigation/HomeLinkIcon';

function Header({ innerRef, onClickDrawerButton }) {
    const { user: { logged } } = useSessionContext()
    const { isSm } = useDevice()
    return (
        <AppBar position="static" ref={innerRef}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {!(isSm && logged) && <HomeLinkIcon sx={{ color: 'inherit' }}></HomeLinkIcon>}
                {isSm && logged && <DrawerMenuButton onClick={onClickDrawerButton}></DrawerMenuButton>}
                {logged && (<AccountMenuButton></AccountMenuButton>)}
            </Toolbar>
        </AppBar>
    );
}

export default Header;