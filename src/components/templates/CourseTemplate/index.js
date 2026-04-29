import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, Divider, Stack, } from "@mui/material";
import Header from "components/dataDisplay/Header";
import LoadingBox from "components/dataDisplay/LoadingBox";
import Truncate from "components/generic/Truncate";

import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES";
import { useEffect, useRef, useState } from "react";

function CourseTemplate({ children, title, loading, backButtonProps }) {

    const headerRef = useRef(null)

    const [headerHeight, setHeaderHeight] = useState(0)

    useEffect(() => {
        if (!!headerRef?.current) {
            setHeaderHeight(headerRef.current.getBoundingClientRect().height)
        }
    }, [headerRef])

    return (
        <Stack height={'100dvh'} width={'100vw'}>
            <Header type={TEMPLATE_TYPES.COURSE} ref={headerRef}></Header>
            <Stack width={'100%'} alignItems={'center'} height={`calc(100% - ${headerHeight}px)`} minHeight={0}>
                <Container maxWidth="lg" disableGutters sx={{ height: '100%', minHeight: 0 }}>
                    {loading
                        ? <LoadingBox></LoadingBox>
                        : <Box sx={{ height: '100%', width: '100%', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                            {title &&
                                <Stack padding={1} pb={0} flexShrink={0}>
                                    {!!backButtonProps && <Button size="small" startIcon={<ArrowBack></ArrowBack>} {...backButtonProps} sx={{ width: 'max-content', ...backButtonProps?.sx }}></Button>}
                                    {!!title && <Truncate line={1} element={'h1'} variant={'h4'} sx={{ pl: 2, pt: 2, fontWeight: 'bold', alignSelf: 'center' }}>{title}</Truncate>}
                                </Stack>}
                            <Box sx={{
                                flex: 1,
                                minHeight: 0,
                                width: '100%',
                                p: 2,
                                overflow: 'auto',
                            }}>
                                {children}
                            </Box>
                        </Box>}
                </Container>
            </Stack>
        </Stack>)
}

export default CourseTemplate;