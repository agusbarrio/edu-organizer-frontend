import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import Header from "components/dataDisplay/Header";
import LoadingBox from "components/dataDisplay/LoadingBox";
import Truncate from "components/generic/Truncate";

import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES";
import { useEffect, useRef, useState } from "react";

function CourseTemplate({ children, title, loading, backButtonProps }) {

    const headerRef = useRef(null)
    const titleRef = useRef(null)

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
        <Stack height={'100dvh'} width={'100vw'}>
            <Header type={TEMPLATE_TYPES.COURSE} ref={headerRef}></Header>
            <Stack width={'100%'} alignItems={'center'} height={`calc(100% - ${headerHeight}px)`}>
                <Container maxWidth="lg" disableGutters sx={{ height: '100%' }}>
                    {loading
                        ? <LoadingBox></LoadingBox>
                        : <Box sx={{ height: '100%', width: '100%' }}>
                            {title &&
                                <Stack padding={1} pb={0} ref={titleRef}>
                                    {!!backButtonProps && <Button size="small" startIcon={<ArrowBack></ArrowBack>} {...backButtonProps} sx={{ width: 'max-content', ...backButtonProps?.sx }}></Button>}
                                    {!!title && <Truncate line={1} element={'h1'} variant={'h4'} sx={{ pl: 2, fontWeight: 'bold' }}>{title}</Truncate>}
                                    <Divider></Divider>
                                </Stack>}
                            <Box sx={{ height: `calc(100% - ${titleHeight}px)`, width: '100%', p: 2 }}>
                                {children}
                            </Box>
                        </Box>}
                </Container>
            </Stack>
        </Stack>)
}

export default CourseTemplate;