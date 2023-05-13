import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from "@mui/material";
function LoadingPage() {
    return <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}><CircularProgress sx={{ width: '6rem', height: '6rem' }}></CircularProgress></Stack>
}

export default LoadingPage