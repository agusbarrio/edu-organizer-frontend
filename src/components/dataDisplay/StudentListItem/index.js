import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import IconButton from "components/generic/IconButton"

function StudentListItem({ student, onClick, listItemIconProps, ...props }) {
    return (
        <>
            <ListItem disablePadding>
                <ListItemButton onClick={onClick}>
                    {listItemIconProps && <ListItemIcon {...listItemIconProps} color='red'></ListItemIcon>}
                    <ListItemText primary={`${student.firstName} ${student.lastName}`} />
                </ListItemButton>
            </ListItem>
            <Divider></Divider>
        </>

    )
}

export default StudentListItem