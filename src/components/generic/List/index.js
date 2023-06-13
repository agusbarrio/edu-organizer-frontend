import { List as ListMUI } from "@mui/material"

function List({ children, ...props }) {
    return (
        <ListMUI sx={{ width: '100%', height: '100%', borderColor: 'divider', borderWidth: '1px', borderStyle: 'solid', overflowY: 'auto', borderRadius: '.25rem' }} dense={true} {...props}>
            {children}
        </ListMUI>
    )
}

export default List