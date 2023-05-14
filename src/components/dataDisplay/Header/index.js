import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SchoolIcon from '@mui/icons-material/School';
import AccountMenuButton from './components/AccountMenuButton';
import useSessionContext from 'hooks/useSessionContext';
import PATHS from 'constants/PATHS';
import Link from 'components/generic/Link';

function Header({ innerRef }) {
    const { user } = useSessionContext()

    return (
        <AppBar position="static" ref={innerRef}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Link href={PATHS.HOME} sx={{ color: 'inherit' }}><SchoolIcon /></Link>
                {user && (<AccountMenuButton></AccountMenuButton>)}
            </Toolbar>
        </AppBar>
    );
}

export default Header;