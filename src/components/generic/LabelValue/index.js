import { Stack, Typography } from "@mui/material"

function LabelValue({ label, value }) {
    return (
        <Typography variant="h5"> <span style={{ textDecoration: 'underline' }}>{label}:</span> {value}</Typography>
    )
}

export default LabelValue