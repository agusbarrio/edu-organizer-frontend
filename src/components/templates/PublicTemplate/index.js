import { Container, Stack, Typography } from "@mui/material";
import Header from "components/dataDisplay/Header";
import LoadingBox from "components/dataDisplay/LoadingBox";

import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES";

function PublicTemplate({ children, title, type = TEMPLATE_TYPES.USER, loading }) {
    return (
        <Stack height={'100dvh'} width={'100vw'} overflow={'hidden'}>
            <Header type={type}></Header>
            <Stack width={'100%'} alignItems={'center'} padding={2}>
                <Container maxWidth="sm" >
                    {loading
                        ? <LoadingBox></LoadingBox>
                        : <Stack spacing={2} height={'100%'} alignItems={'center'}>
                            {title && <Typography variant="h3" component="h1">{title}</Typography>}
                            {children}
                        </Stack>}
                </Container>
            </Stack>
        </Stack>)
}

export default PublicTemplate;