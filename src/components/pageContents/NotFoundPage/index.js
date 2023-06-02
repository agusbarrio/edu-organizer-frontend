import { Typography } from "@mui/material"
import PublicTemplate from "components/templates/PublicTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function NotFoundPage() {
    const { translate } = useLocaleContext()
    return (
        <PublicTemplate title={translate(TEXTS.NOT_FOUND_PAGE_TITLE)}>
            <Typography variant="h4" component={'h2'}>{translate(TEXTS.NOT_FOUND_PAGE_DESCRIPTION)}</Typography>
        </PublicTemplate>
    )
}

export default NotFoundPage