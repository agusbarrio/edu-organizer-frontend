import { RemoveCircleOutline } from "@mui/icons-material";
import StudentsList from "components/dataDisplay/StudentsList";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";



function StudentsListCard({ students, onClickDrop }) {
    const { translate } = useLocaleContext()
    return <StudentsList
        cardTitle={translate(TEXTS.COURSE_STUDENTS_LIST_CARD_TITLE)}
        help={translate(TEXTS.COURSE_STUDENTS_LIST_CARD_HELP)}
        onClickItem={onClickDrop}
        students={students}
        itemIconProps={{ children: <RemoveCircleOutline color="error" /> }}
    ></StudentsList>
}

export default StudentsListCard