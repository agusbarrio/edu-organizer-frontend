import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Divider, Stack, } from "@mui/material";
import Header from "components/dataDisplay/Header";
import NavMenu from "components/dataDisplay/NavMenu";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Truncate from "components/generic/Truncate";


function DashboardTemplate({ children, title, subtitle, backButtonProps }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = useCallback(() => {
        setMobileOpen(!mobileOpen);
    }, [mobileOpen]);

    const menuRef = useRef(null)
    const headerRef = useRef(null)
    const titleRef = useRef(null)


    const [headerHeight, setHeaderHeight] = useState(0)
    const [menuWidth, setMenuWidth] = useState(0)
    const [titleHeight, setTitleHeight] = useState(0)

    useEffect(() => {
        if (!!headerRef?.current) {
            setHeaderHeight(headerRef.current.getBoundingClientRect().height)
        }
    }, [headerRef])
    useEffect(() => {
        if (!!menuRef?.current) {
            setMenuWidth(menuRef.current.getBoundingClientRect().width)
        }
    }, [menuRef])
    useEffect(() => {
        if (!!titleRef?.current) {
            setTitleHeight(titleRef.current.getBoundingClientRect().height)
        }
    }, [titleRef])


    return (
        <Stack height={'100vh'} width={'100vw'} >
            <Header drawerOpen={mobileOpen} onClickDrawerButton={handleDrawerToggle} innerRef={headerRef}></Header>
            <Stack direction={'row'} height={`calc(100% - ${headerHeight}px)`}>
                <NavMenu open={mobileOpen} innerRef={menuRef}></NavMenu>
                <Box width={`calc(100% - ${menuWidth}px)`}  >
                    {(!!title || !!subtitle || !!backButtonProps) &&
                        <Stack width={'100%'} padding={1} pb={0} ref={titleRef}>
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