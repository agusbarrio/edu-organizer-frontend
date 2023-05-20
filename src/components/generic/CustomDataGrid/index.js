import { DataGrid } from "@mui/x-data-grid"
import Toolbar from "./components/Toolbar"
import { useState } from "react";

function CustomDataGrid({ rows, columns, slots, rowSelection, onClickEditSelection, onClickDeleteSelection, ...props }) {
    const [rowSelectionModel, setRowSelectionModel] = useState([]);


    return <DataGrid
        rows={rows}
        columns={columns}
        slots={{
            toolbar: (toolbarProps) =>
                <Toolbar
                    rows={rows}
                    onClickDeleteSelection={onClickDeleteSelection}
                    onClickEditSelection={onClickEditSelection}
                    rowSelectionModel={rowSelectionModel}
                    {...toolbarProps}
                ></Toolbar>
            , ...slots
        }}
        rowSelection={rowSelection}
        density="compact"
        onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
        }}
        {...props} />
}

export default CustomDataGrid