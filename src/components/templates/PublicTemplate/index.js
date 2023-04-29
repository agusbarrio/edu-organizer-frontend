import { Box, Container, Stack } from "@mui/material";
import Header from "components/dataDisplay/Header";
import Typography from "core/components/Typography";
import { useMemo, useRef } from "react";
function PublicTemplate({ children, title }) {

    return (<Stack height={'100vh'} width={'100vw'} spacing={2} alignItems={'center'}>
        <Header></Header>
        <Container maxWidth="sm" sx={{ height: '100%' }}>
            <Stack spacing={8} height={'100%'} >
                {title && <Typography variant="h1" component="h1">{title}</Typography>}
                {children}
            </Stack>
        </Container>
    </Stack>)
}

export default PublicTemplate;