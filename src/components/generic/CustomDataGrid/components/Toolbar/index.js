import { Add } from "@mui/icons-material"
import { Box, Button, Stack } from "@mui/material"
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid"
import CORE_TEXTS from "constants/CORE_TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function Toolbar({ onClickAdd, ...props }) {
    const { translate } = useLocaleContext()
    return (
        <GridToolbarContainer {...props}>
            <Stack direction={'row'} spacing={1} width={'100%'}>
                <Stack direction={'row'} spacing={1} flexGrow={1}>
                    <GridToolbarColumnsButton />
                    <GridToolbarFilterButton />
                    {/*  <GridToolbarDensitySelector /> */}
                    {/* <GridToolbarExport /> */}
                </Stack>
                <Button variant="contained" startIcon={<Add></Add>} size="small" onClick={onClickAdd}>{translate(CORE_TEXTS.GENERIC_ADD)}</Button>
            </Stack>



        </GridToolbarContainer>)
}

export default Toolbar