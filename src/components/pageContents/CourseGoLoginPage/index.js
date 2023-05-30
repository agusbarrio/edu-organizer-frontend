
import { Stack } from "@mui/material"
import CourseShortIdForm from "components/forms/CourseShortIdForm"
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
import { renderText } from "utils/text"

function CourseGoLoginPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()



    return (
        <PublicTemplate title={translate(TEXTS.COURSE_GO_LOGIN_PAGE_TITLE)} type={TEMPLATE_TYPES.COURSE}>
            <Stack spacing={2} width={'100%'}>
                <CourseShortIdForm onSubmit={async ({ shortId }) => {
                    go(renderText(PATHS.COURSE_LOGIN, { shortId }))
                }}></CourseShortIdForm>
                <Link href={PATHS.LOGIN}>{translate(TEXTS.GO_BACK_LOGIN)}</Link>
            </Stack>
        </PublicTemplate>
    )
}

export default CourseGoLoginPage