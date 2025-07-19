import { DataGrid, gridFilteredSortedRowEntriesSelector, useGridApiRef } from "@mui/x-data-grid"
import Toolbar from "./components/Toolbar"
import { useCallback, useState } from "react";
import Footer from "./components/Footer";

function CustomDataGrid({
    rows = [],
    columns,
    slots,
    slotProps,
    rowSelection,
    onClickEditSelection,
    onClickDeleteSelection,
    initialPaginationModel = {
        page: 0,
        pageSize: 50,
    },
    ...props }) {
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const [paginationModel, setPaginationModel] = useState(initialPaginationModel);
    const [filteredRows, setFilteredRows] = useState([])
    const getFilteredRows = ({ apiRef }) => gridFilteredSortedRowEntriesSelector(apiRef)
    const apiRef = useGridApiRef();

    //TODO encontrar como actualizar esto unicamente en un cambio desencadenado por un filtro
    const handleStateChange = useCallback(() => {
        const newFilteredRows = getFilteredRows({ apiRef })
        setFilteredRows(newFilteredRows.map(el => el.model))
    }, [apiRef])

    return <DataGrid
        onStateChange={handleStateChange}
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        slotProps={{
            ...slotProps,
            toolbar: {
                rows,
                onClickDeleteSelection: onClickDeleteSelection,
                onClickEditSelection: onClickEditSelection,
                rowSelectionModel: rowSelectionModel,
                children: slotProps?.toolbar?.children,
                ...slotProps?.toolbar
            },
            footer: {
                rows,
                filteredRows,
                ...slotProps?.footer,
            },
            filterPanel: {
                filterFormProps: {
                    sx: {
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    },
                    columnInputProps: {
                        sx: {
                            width: '100%'
                        }
                    },
                    operatorInputProps: {
                        sx: {
                            width: '100%'
                        }
                    },
                    valueInputProps: {
                        sx: {
                            width: '100%'
                        }
                    }
                },
            }
        }
        }
        slots={{
            toolbar: Toolbar,
            footer: Footer,
            ...slots
        }}
        rowSelection={rowSelection}
        density="compact"
        onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
        }}
        pageSizeOptions={[50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        {...props} />
}

export default CustomDataGrid