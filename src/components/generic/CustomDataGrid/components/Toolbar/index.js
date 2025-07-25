import { Delete, Edit } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"
import { GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid"
import CORE_TEXTS from "constants/CORE_TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import _ from "lodash"
import { useCallback, useMemo } from "react"

function Toolbar({ onClickEditSelection, onClickDeleteSelection, rowSelectionModel = [], rows = [], children, ...props }) {
    const { translate } = useLocaleContext()
    const showMultipleSelectionButtons = useMemo(() => !_.isEmpty(rowSelectionModel), [rowSelectionModel])
    const rowsSelected = useMemo(() => rows.filter(row => rowSelectionModel.includes(row.id))
        , [rowSelectionModel, rows])
    const handleClickEditSelection = useCallback(() => {
        onClickEditSelection(rowsSelected)
    }, [onClickEditSelection, rowsSelected])

    const handleClickDeleteSelection = useCallback(() => {
        onClickDeleteSelection(rowsSelected)
    }, [onClickDeleteSelection, rowsSelected])

    return (
        <GridToolbarContainer {...props}>
            <Stack direction={'row'} spacing={1} width={'100%'}>
                {<Stack direction={'row'} spacing={1} flexGrow={1}>
                    <GridToolbarFilterButton />
                </Stack>}
                {onClickDeleteSelection && showMultipleSelectionButtons && <Button startIcon={<Delete></Delete>} color="error" size="small" onClick={handleClickDeleteSelection}>{translate(CORE_TEXTS.GENERIC_DELETE_SELECTION)}</Button>}
                {onClickEditSelection && showMultipleSelectionButtons && <Button startIcon={<Edit></Edit>} size="small" onClick={handleClickEditSelection}>{translate(CORE_TEXTS.GENERIC_EDIT_SELECTION)}</Button>}
                {children}
            </Stack>
        </GridToolbarContainer>)
}

export default Toolbar