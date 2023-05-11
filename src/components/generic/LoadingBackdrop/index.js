import { Backdrop, CircularProgress } from "@mui/material";

function LoadingBackdrop({ loading }) {
    return (
        <>
            {loading && <Backdrop
                sx={{
                    position: 'static',
                    width: '100%',
                    height: '100%',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
            >
                <CircularProgress size={'5rem'}></CircularProgress>
            </Backdrop>}
        </>
    );
}

export default LoadingBackdrop;