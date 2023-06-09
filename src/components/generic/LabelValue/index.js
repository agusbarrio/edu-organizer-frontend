import { Stack, Typography } from "@mui/material"

function LabelValue({ label, value, variant = "body1", labelProps = {}, valueProps = {} }) {

    return (
        <Stack>
            <Typography variant={variant} sx={{ fontWeight: 'bold' }} {...labelProps}>{label}:</Typography>
            <Typography {...valueProps}>{value}</Typography>
        </Stack>
    )
}

export default LabelValue