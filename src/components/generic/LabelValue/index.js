import { Stack, Typography } from "@mui/material"
import Truncate from "../Truncate"

function LabelValue({ label, value, variant = "h5", labelProps = {}, valueProps = {} }) {

    return (
        <Stack>
            <Typography variant={variant} sx={{ fontWeight: 'bold' }} {...labelProps}>{label}:</Typography>
            <Typography {...valueProps}>{value}</Typography>
        </Stack>
    )
}

export default LabelValue