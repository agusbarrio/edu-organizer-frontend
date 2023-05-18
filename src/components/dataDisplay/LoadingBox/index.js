import { Box, CircularProgress, Stack } from "@mui/material"

function LoadingBox() {
    return (
        <Stack width={'100%'} height='100%' justifyContent={'center'} alignItems={'center'}>
            <CircularProgress size={'6rem'}></CircularProgress>
        </Stack>
    )
}

export default LoadingBox