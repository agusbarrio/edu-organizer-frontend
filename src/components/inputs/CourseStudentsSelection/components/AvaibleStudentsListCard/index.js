import { AddCircleOutline, } from "@mui/icons-material"
import { IconButton, List } from "@mui/material"
import StudentListItem from "components/dataDisplay/StudentListItem"
import StudentsList from "components/dataDisplay/StudentsList"
import Card from "components/generic/Card"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function AvaibleStudentsListCard({ onClickAdd, students }) {
    const { translate } = useLocaleContext()
    return (
        <StudentsList cardTitle={translate(TEXTS.AVAIBLE_STUDENTS_LIST_CARD_TITLE)} onClickItem={onClickAdd} students={students} listItemIconProps={{ children: <AddCircleOutline color="primary" /> }}></StudentsList>
    )
}

export default AvaibleStudentsListCard