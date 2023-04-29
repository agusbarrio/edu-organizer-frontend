import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SchoolIcon from '@mui/icons-material/School';

function Header() {
    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SchoolIcon sx={{ mr: 1, fontSize: '2rem' }} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;