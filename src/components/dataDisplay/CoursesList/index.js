import { Divider } from "@mui/material"
import Card from "components/generic/Card"
import List from "components/generic/List"
import ListItemButton from "components/generic/ListItemButton"

function CoursesList({ onClickItem, courses, itemIconProps, cardTitle, help }) {
    return (
        <Card title={cardTitle} help={help}>
            <List>
                {courses.map(course => <>
                    <ListItemButton
                        key={course.id || course.key}
                        iconProps={itemIconProps}
                        buttonProps={{ onClick: () => { if (onClickItem) onClickItem(course) } }}
                        text={`${course.name}`}
                    ></ListItemButton>
                    <Divider></Divider>
                </>)}
            </List>
        </Card>
    )
}

export default CoursesList