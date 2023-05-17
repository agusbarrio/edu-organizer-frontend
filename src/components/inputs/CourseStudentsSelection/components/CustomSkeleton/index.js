import { Box, Skeleton } from "@mui/material"

function CustomSkeleton() {
    return (
        <Skeleton sx={{ width: '100%', height: '100%', transform: 'unset', WebkitTransform: 'unset' }}>
        </Skeleton>
    )
}

export default CustomSkeleton