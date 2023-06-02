
import { Stack } from "@mui/material"
import CourseLoginForm from "components/forms/CourseLoginForm"
import Link from "components/generic/Link"
import PublicTemplate from "components/templates/PublicTemplate"
import PATHS from "constants/PATHS"
import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useSessionContext from "hooks/useSessionContext"
import { useMemo } from "react"
import useCourseLoginService from "services/auth/useCourseLoginService"

function CourseLoginPage() {
    const { translate } = useLocaleContext()
    const { courseLogin: courseLoginContext } = useSessionContext()
    const { courseLogin } = useCourseLoginService()
    const { params } = useNavigate()
    const shortId = useMemo(() => params.shortId, [params.shortId])

    return (
        <PublicTemplate title={translate(TEXTS.COURSE_LOGIN_PAGE_TITLE)} type={TEMPLATE_TYPES.COURSE}>
            <Stack spacing={2} width={'100%'}>
                <CourseLoginForm onSubmit={async ({ accessPin }) => {
                    const result = await courseLogin({ accessPin, shortId })
                    if (result) {
                        courseLoginContext(result)
                    }
                }}></CourseLoginForm>
            </Stack>
        </PublicTemplate>
    )
}

export default CourseLoginPage