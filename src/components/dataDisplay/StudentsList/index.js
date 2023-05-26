import { List } from "@mui/material"
import StudentListItem from "components/dataDisplay/StudentListItem"
import Card from "components/generic/Card"

function StudentsList({ onClickItem, students, listItemIconProps, cardTitle, help }) {
    return (
        <Card title={cardTitle} sx={{ width: '100%', height: '100%' }} help={help}>
            <List sx={{ width: '100%', height: '100%', overflowY: 'auto', border: 'thin solid black', borderRadius: '.25rem' }} dense={true}>
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