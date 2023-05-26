import { Skeleton } from "@mui/material"

function FullSkeleton() {
    return (
        <Skeleton sx={{ width: '100%', height: '100%', transform: 'unset', WebkitTransform: 'unset' }}>
        </Skeleton>
    )
}

export default FullSkeleton