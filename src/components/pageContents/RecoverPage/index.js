
import { Stack } from "@mui/material"
import PublicTemplate from "components/templates/PublicTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import Link from "components/generic/Link"
import useLocaleContext from "hooks/useLocaleContext"
import CoomingSoon from "components/dataDisplay/CoomingSoon"

function RecoverPage() {
    const { translate } = useLocaleContext()
    return (
        <PublicTemplate title={translate(TEXTS.RECOVER_PAGE_TITLE)}>
            <Stack spacing={2} width={'100%'}>
                <CoomingSoon>
                    {translate(TEXTS.RECOVER_PAGE_TITLE)}
                </CoomingSoon>
                <Link href={PATHS.LOGIN}>{translate(TEXTS.RECOVER_PAGE_GO_BACK_LOGIN_LINK)}</Link>
            </Stack>
        </PublicTemplate>
    )
}

export default RecoverPage