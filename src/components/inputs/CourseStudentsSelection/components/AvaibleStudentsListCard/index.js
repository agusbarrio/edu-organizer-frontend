import { AddCircleOutline, } from "@mui/icons-material"
import StudentsList from "components/dataDisplay/StudentsList"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function AvaibleStudentsListCard({ onClickAdd, students }) {
    const { translate } = useLocaleContext()
    return (
        <StudentsList
            cardTitle={translate(TEXTS.AVAIBLE_STUDENTS_LIST_CARD_TITLE)}
            help={translate(TEXTS.AVAIBLE_STUDENTS_LIST_CARD_HELP)}
            onClickItem={onClickAdd}
            students={students}
            itemIconProps={{ children: <AddCircleOutline color="primary" /> }}
        ></StudentsList>
    )
}

export default AvaibleStudentsListCard