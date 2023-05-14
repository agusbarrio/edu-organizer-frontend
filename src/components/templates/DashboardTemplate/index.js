import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Header from "components/dataDisplay/Header";
import NavMenu from "components/dataDisplay/NavMenu";
import { useCallback, useMemo, useRef, useState } from "react";
import Link from 'components/generic/Link'
import Truncate from "components/generic/Truncate";


function DashboardTemplate({ children, title, subtitle, backButtonProps }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = useCallback(() => {
        setMobileOpen(!mobileOpen);
    }, [mobileOpen]);

    const menuRef = useRef()
    const headerRef = useRef()
    const titleRef = useRef()

    const headerHeight = useMemo(() => {
        return !!headerRef?.current
            ? headerRef.current.getBoundingClientRect().height
            : 0;
    }, [headerRef])

    const menuWidth = useMemo(() => {
        return !!menuRef?.current
            ? menuRef.current.getBoundingClientRect().width
            : 0;
    }, [menuRef])

    const titleHeight = useMemo(() => {
        return !!titleRef?.current
            ? titleRef.current.getBoundingClientRect().height
            : 0;
    }, [titleRef])

    return (
        <Stack height={'100vh'} width={'100vw'} >
            <Header drawerOpen={mobileOpen} onClickDrawerButton={handleDrawerToggle} innerRef={headerRef}></Header>
            <Stack direction={'row'} height={`calc(100% - ${headerHeight}px)`}>
                <NavMenu open={mobileOpen} innerRef={menuRef}></NavMenu>
                <Box width={`calc(100% - ${menuWidth}px)`}  >
                    {(!!title || !!subtitle || !!backButtonProps) &&
                        <Stack width={'100%'} ref={titleRef} padding={1} pb={0}>
                            {!!backButtonProps && <Button size="small" startIcon={<ArrowBack></ArrowBack>} {...backButtonProps} sx={{ width: 'max-content', ...backButtonProps?.sx }}></Button>}
                            {!!title && <Truncate line={1} element={'h1'} variant={'h4'} sx={{ pl: 4, fontWeight: 'bold' }}>{title}</Truncate>}
                            {!!subtitle && <Truncate line={2} element={'h2'} variant={'subtitle1'} sx={{ pl: 4, fontWeight: 'bold' }}>{subtitle}</Truncate>}
                            <Divider></Divider>
                        </Stack>}
                    <Box height={`calc(100% - ${titleHeight}px)`} width={'100%'} padding={2} overflow={'scroll'}>
                        {children}
                    </Box>
                </Box>
            </Stack>
        </Stack >
    )
}

export default DashboardTemplate;