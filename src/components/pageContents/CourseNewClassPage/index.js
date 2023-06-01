import { Button } from "@mui/material"
import CoomingSoon from "components/dataDisplay/CoomingSoon"
import PublicTemplate from "components/templates/PublicTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"

function CourseNewClassPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    return (
        <PublicTemplate title={translate(TEXTS.COURSE_NEW_CLASS_PAGE_TITLE)} type={TEMPLATE_TYPES.COURSE} >
            <CoomingSoon></CoomingSoon>
            <Button onClick={() => go(PATHS.COURSE)}>{translate(CORE_TEXTS.GENERIC_BACK)}</Button>
        </PublicTemplate>
    )
}

export default CourseNewClassPage