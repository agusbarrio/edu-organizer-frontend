import { Divider } from "@mui/material"
import Card from "components/generic/Card"
import List from "components/generic/List"
import ListItemButton from "components/generic/ListItemButton"
import { Fragment } from "react"

function CoursesList({ onClickItem, courses, itemIconProps, cardTitle, help }) {
    return (
        <Card title={cardTitle} help={help}>
            <List>
                {courses.map(course => <Fragment key={course.id || course.key}>
                    <ListItemButton
                        iconProps={itemIconProps}
                        buttonProps={{ onClick: () => { if (onClickItem) onClickItem(course) } }}
                        text={`${course.name}`}
                    ></ListItemButton>
                    <Divider></Divider>
                </Fragment>)}
            </List>
        </Card>
    )
}

export default CoursesList