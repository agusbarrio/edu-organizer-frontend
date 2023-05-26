import { Container, Stack, Typography } from "@mui/material";
import Header from "components/dataDisplay/Header";

function PublicTemplate({ children, title }) {
    return (
        <Stack height={'100dvh'} width={'100vw'} overflow={'hidden'}>
            <Header></Header>
            <Stack width={'100%'} alignItems={'center'} padding={2}>
                <Container maxWidth="sm" >
                    <Stack spacing={2} height={'100%'} alignItems={'center'}>
                        {title && <Typography variant="h3" component="h1">{title}</Typography>}
                        {children}
                    </Stack>
                </Container>
            </Stack>

        </Stack>)
}

export default PublicTemplate;