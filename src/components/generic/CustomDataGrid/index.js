import { DataGrid } from "@mui/x-data-grid"
import Toolbar from "./components/Toolbar"

function CustomDataGrid({ rows, onClickAdd, columns, slots, rowSelection, ...props }) {
    return <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: (toolbarProps) => <Toolbar onClickAdd={onClickAdd} {...toolbarProps}></Toolbar>, ...slots }}
        rowSelection={rowSelection}
        density="compact"
        {...props} />
}

export default CustomDataGrid