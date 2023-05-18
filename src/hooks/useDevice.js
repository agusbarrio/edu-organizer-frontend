import { useMediaQuery } from "@mui/material";

function useDevice() {
    const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme => theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme => theme.breakpoints.down('lg'));
    const isXl = useMediaQuery(theme => theme.breakpoints.down('xl'));

    return { isXs, isSm, isMd, isLg, isXl }
}

export default useDevice;