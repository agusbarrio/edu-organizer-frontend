import { Typography } from "@mui/material"

function LabelValue({ label, value }) {
    return (
        <Typography variant="h5"> <span style={{ fontWeight: 'bold' }}>{label}:</span> {value}</Typography>
    )
}

export default LabelValue