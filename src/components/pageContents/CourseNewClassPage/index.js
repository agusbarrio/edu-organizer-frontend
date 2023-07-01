import { Box } from "@mui/material"
import CourseTemplate from "components/templates/CourseTemplate"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useSessionContext from "hooks/useSessionContext"
import ClassSessionMachine from "machines/ClassSessionMachine"


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
                <ClassSessionMachine course={course} onFinish={() => go(PATHS.COURSE)}></ClassSessionMachine>
            </Box>
        </CourseTemplate>
    )
}

export default CourseNewClassPage