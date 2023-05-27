import { Divider } from "@mui/material"
import Card from "components/generic/Card"
import List from "components/generic/List"
import ListItemButton from "components/generic/ListItemButton"

function StudentsList({ onClickItem, students, itemIconProps, cardTitle, help }) {
    return (
        <Card title={cardTitle} help={help}>
            <List>
                {students.map(student => <>
                    <ListItemButton
                        key={student.id || student.key}
                        iconProps={itemIconProps}
                        buttonProps={{ onClick: () => { if (onClickItem) onClickItem(student) } }}
                        text={`${student.firstName} ${student.lastName}`}
                    ></ListItemButton>
                    <Divider></Divider>
                </>)}
            </List>
        </Card>
    )
}

export default StudentsList