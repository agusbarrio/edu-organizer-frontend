import { useMediaQuery } from "@mui/material";

function useDevice() {
    const lessThanXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const lessThanSm = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const lessThanMd = useMediaQuery(theme => theme.breakpoints.down('md'));
    const lessThanLg = useMediaQuery(theme => theme.breakpoints.down('lg'));
    const lessThanXl = useMediaQuery(theme => theme.breakpoints.down('xl'));
    const greaterThanXs = useMediaQuery(theme => theme.breakpoints.up('xs'));
    const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
    const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'));
    const greaterThanLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
    const greaterThanXl = useMediaQuery(theme => theme.breakpoints.up('xl'));
    return {
        lessThanXs,
        lessThanSm,
        lessThanMd,
        lessThanLg,
        lessThanXl,
        greaterThanXs,
        greaterThanSm,
        greaterThanMd,
        greaterThanLg,
        greaterThanXl
    }
}

export default useDevice;