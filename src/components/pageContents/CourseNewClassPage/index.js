import { Box, Button } from "@mui/material"
import CoomingSoon from "components/dataDisplay/CoomingSoon"
import CourseTemplate from "components/templates/CourseTemplate"
import PublicTemplate from "components/templates/PublicTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useSessionContext from "hooks/useSessionContext"
import NewCourseClassMachine from "machines/NewCourseClassMachine"


function CourseNewClassPage() {
    const { translate } = useLocaleContext()
    const { course } = useSessionContext()
    const { go } = useNavigate()

    return (
        <CourseTemplate title={translate(TEXTS.COURSE_NEW_CLASS_PAGE_TITLE)} backButtonProps={{
            children: translate(TEXTS.GO_BACK_COURSE),
            onClick: () => go(PATHS.COURSE)
        }}>
            <Box sx={{ height: '100%' }}>
                <NewCourseClassMachine course={course} onFinish={() => go(PATHS.COURSE)}></NewCourseClassMachine>
            </Box>
        </CourseTemplate>
    )
}

export default CourseNewClassPage