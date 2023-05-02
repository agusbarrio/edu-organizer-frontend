import { Container, Stack } from "@mui/material";
import Header from "components/dataDisplay/Header";
import Typography from "core/components/Typography";

function PublicTemplate({ children, title }) {

    return (
        <Stack height={'100vh'} width={'100vw'} overflow={'hidden'}>
            <Header></Header>
            <Stack width={'100%'} alignItems={'center'} overflow={'scroll'} padding={2}>
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