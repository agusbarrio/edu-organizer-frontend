import { List as ListMUI } from "@mui/material"

function List({ children, ...props }) {
    return (
        <ListMUI sx={{ width: '100%', height: '100%', border: 'thin solid black', overflowY: 'auto', borderRadius: '.25rem' }} dense={true} {...props}>
            {children}
        </ListMUI>
    )
}

export default List