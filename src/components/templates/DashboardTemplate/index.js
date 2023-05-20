import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Divider, Skeleton, Stack, } from "@mui/material";
import Header from "components/dataDisplay/Header";
import DrawerMenu from "components/dataDisplay/DrawerMenu";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Truncate from "components/generic/Truncate";
import LoadingBox from "components/dataDisplay/LoadingBox";

const drawerWidth = 240;

function DashboardTemplate({ children, title, subtitle, backButtonProps, loading = false }) {

    const drawerRef = useRef(null)
    const headerRef = useRef(null)
    const titleRef = useRef(null)

    const handleOpenDrawer = useCallback(() => {
        if (!!drawerRef?.current) {
            drawerRef.current.openMobile()
        }
    }, [drawerRef]);

    const [headerHeight, setHeaderHeight] = useState(0)
    const [titleHeight, setTitleHeight] = useState(0)

    useEffect(() => {
        if (!!headerRef?.current) {
            setHeaderHeight(headerRef.current.getBoundingClientRect().height)
        }
    }, [headerRef])

    useEffect(() => {
        if (!!titleRef?.current) {
            setTitleHeight(titleRef.current.getBoundingClientRect().height)
        }
    }, [titleRef])

    return (
        <Stack height={'100vh'} width={'100vw'} >
            <Header onClickDrawerButton={handleOpenDrawer} innerRef={headerRef}></Header>
            <Stack direction={'row'} height={`calc(100% - ${headerHeight}px)`}>
                <DrawerMenu drawerWidth={drawerWidth} innerRef={drawerRef}></DrawerMenu>
                <Box sx={{ flexGrow: 1, width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` } }}>
                    {(!!title || !!subtitle || !!backButtonProps) &&
                        <Stack width={'100%'} padding={1} pb={0} ref={titleRef}>
                            {!!backButtonProps && <Button size="small" startIcon={<ArrowBack></ArrowBack>} {...backButtonProps} sx={{ width: 'max-content', ...backButtonProps?.sx }}></Button>}
                            {!!title && <Truncate line={1} element={'h1'} variant={'h4'} sx={{ pl: 4, fontWeight: 'bold' }}>{title}</Truncate>}
                            {!!subtitle && <Truncate line={2} element={'h2'} variant={'subtitle1'} sx={{ pl: 4, fontWeight: 'bold' }}>{subtitle}</Truncate>}
                            <Divider></Divider>
                        </Stack>}
                    {
                        loading
                            ? <LoadingBox></LoadingBox>
                            : <Box height={`calc(100% - ${titleHeight}px)`} width={'100%'} padding={2} overflow={'scroll'}>
                                {children}
                            </Box>
                    }
                </Box>
            </Stack>
        </Stack >
    )
}

export default DashboardTemplate;