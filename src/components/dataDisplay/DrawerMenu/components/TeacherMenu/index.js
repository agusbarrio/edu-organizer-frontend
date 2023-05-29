import CoomingSoon from "components/dataDisplay/CoomingSoon"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function TeacherMenu() {
    const { translate } = useLocaleContext()
    return <CoomingSoon>{translate(TEXTS.TEACHER_MENU)}</CoomingSoon>
}

export default TeacherMenu