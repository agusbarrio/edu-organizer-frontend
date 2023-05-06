import { Stack, Typography } from "@mui/material"
import CORE_TEXTS from "constants/CORE_TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function CoomingSoon({ children }) {
    const { translate } = useLocaleContext()
    return (
        <Stack spacing={1}>
            <Typography fontWeight={'bold'}>{children}</Typography>
            <Typography>{translate(CORE_TEXTS.COOMING_SOON)}</Typography>
        </Stack>

    )
}

export default CoomingSoon