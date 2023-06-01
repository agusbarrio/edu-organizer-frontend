import PublicTemplate from "components/templates/PublicTemplate"
import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES"

import CoomingSoon from "components/dataDisplay/CoomingSoon"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import useNavigate from "hooks/useNavigate"
import { Button } from "@mui/material"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"

function CourseNewStudentPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    return (
        <PublicTemplate title={translate(TEXTS.COURSE_NEW_STUDENT_PAGE_TITLE)} type={TEMPLATE_TYPES.COURSE}>
            <CoomingSoon></CoomingSoon>
            <Button onClick={() => go(PATHS.COURSE)}>{translate(CORE_TEXTS.GENERIC_BACK)}</Button>

        </PublicTemplate>
    )
}

export default CourseNewStudentPage