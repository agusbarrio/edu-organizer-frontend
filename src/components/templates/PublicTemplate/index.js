import { Container, Stack, Typography } from "@mui/material";
import Header from "components/dataDisplay/Header";
import LoadingBox from "components/dataDisplay/LoadingBox";

import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES";

function PublicTemplate({ children, title, type = TEMPLATE_TYPES.USER, loading }) {
    return (
        <Stack direction="column" height={'100dvh'} width={'100vw'} overflow={'hidden'}>
            <Header type={type}></Header>
            <Stack
                component="main"
                flex={1}
                width={'100%'}
                minHeight={0}
                alignItems={'center'}
                justifyContent={'center'}
                padding={2}
                overflow={'auto'}
            >
                <Container maxWidth="sm" sx={{ width: '100%' }}>
                    {loading
                        ? <LoadingBox></LoadingBox>
                        : <Stack spacing={2} width={'100%'} alignItems={'center'}>
                            {title && (
                                <Typography variant="h3" component="h1" width="100%" textAlign="center">
                                    {title}
                                </Typography>
                            )}
                            {children}
                        </Stack>}
                </Container>
            </Stack>
        </Stack>)
}

export default PublicTemplate;