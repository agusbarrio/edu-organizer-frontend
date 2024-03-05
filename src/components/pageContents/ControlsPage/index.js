
import { Button } from "@mui/material"
import OrganizationsDataTable from "components/dataTables/OrganizationsDataTable"
import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useService from "hooks/useService"
import { useCallback, useEffect } from "react"
import useClearUnusedFilesService from "services/files/useClearUnusedFiles"

function ControlsPage() {
    const { translate } = useLocaleContext()
    const { clearUnusedFiles } = useClearUnusedFilesService()
    const { runService, loading } = useService({ service: clearUnusedFiles, defaultValue: [] })

    const handleClick = useCallback(async () => {
        await runService()
    }, [runService])

    return (
        <DashboardTemplate
            title={translate(TEXTS.CONTROLS_PAGE_TITLE)}
            subtitle={translate(TEXTS.CONTROLS_PAGE_SUBTITLE)}
        >
            <Button onClick={handleClick} disabled={loading} variant="contained">{translate(TEXTS.CONTROLS_CLEAR_UNUSED_FILES)}</Button>
        </DashboardTemplate>
    )
}

export default ControlsPage