import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Stack, } from "@mui/material";
import Header from "components/dataDisplay/Header";
import DrawerMenu from "components/dataDisplay/DrawerMenu";
import { useCallback, useRef } from "react";
import Truncate from "components/generic/Truncate";
import LoadingBox from "components/dataDisplay/LoadingBox";

const drawerWidth = 240;

function DashboardTemplate({ children, title, subtitle, backButtonProps, rightButtonProps, loading = false }) {

    const drawerRef = useRef(null)

    const handleOpenDrawer = useCallback(() => {
        if (!!drawerRef?.current) {
            drawerRef.current.openMobile()
        }
    }, [drawerRef]);

    return (
        <Stack height={'100dvh'} width={'100vw'} direction="column" sx={{ minHeight: 0, overflow: 'hidden' }}>
            <Box sx={{ flexShrink: 0 }}>
                <Header onClickDrawerButton={handleOpenDrawer}></Header>
            </Box>
            <Stack direction={'row'} sx={{ flex: 1, minHeight: 0 }}>
                <DrawerMenu drawerWidth={drawerWidth} ref={drawerRef}></DrawerMenu>
                <Box sx={{
                    flexGrow: 1,
                    minHeight: 0,
                    width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}>
                    {(!!title || !!subtitle || !!backButtonProps) &&
                        <Stack width={'100%'} padding={2} pb={0} flexShrink={0}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Stack>
                                    {!!backButtonProps && <Button size="small" startIcon={<ArrowBack></ArrowBack>} {...backButtonProps} sx={{ width: 'max-content', ...backButtonProps?.sx }}></Button>}
                                    {!!title && <Truncate line={1} element={'h1'} variant={'h4'} sx={{ pl: 2, fontWeight: 'bold' }}>{title}</Truncate>}
                                    {!!subtitle && <Truncate line={2} element={'h2'} variant={'subtitle1'} sx={{ pl: 2, fontWeight: 'bold' }}>{subtitle}</Truncate>}
                                </Stack>
                                <Stack justifyContent={'center'} alignItems={'center'}>
                                    {!!rightButtonProps && <Button variant="contained" size="small"{...rightButtonProps}></Button>}
                                </Stack>
                            </Stack>
                        </Stack>}
                    {
                        loading
                            ? <Box sx={{ flex: 1, minHeight: 0, width: '100%' }}><LoadingBox></LoadingBox></Box>
                            : <Box sx={{
                                flex: 1,
                                minHeight: 0,
                                width: '100%',
                                overflowY: 'auto',
                                padding: 2,
                            }} >
                                {children}
                            </Box>
                    }
                </Box>
            </Stack>
        </Stack >
    )
}

export default DashboardTemplate;