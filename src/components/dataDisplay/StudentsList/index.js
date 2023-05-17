import { AddCircleOutline, } from "@mui/icons-material"
import { IconButton, List } from "@mui/material"
import StudentListItem from "components/dataDisplay/StudentListItem"
import Card from "components/generic/Card"

function StudentsList({ onClickItem, students, listItemIconProps, cardTitle }) {
    return (
        <Card title={cardTitle} sx={{ width: '100%', height: '100%' }} variant="outlined">
            <List sx={{ width: '100%', height: '100%', overflow: 'scroll', border: 'thin solid black', borderRadius: '.25rem' }} dense={true}>
                {students.map((student) => <StudentListItem
                    onClick={() => onClickItem(student)}
                    listItemIconProps={listItemIconProps}
                    key={student.id || student.key}
                    student={student}
                />
                )}
            </List>
        </Card>
    )
}

export default StudentsList