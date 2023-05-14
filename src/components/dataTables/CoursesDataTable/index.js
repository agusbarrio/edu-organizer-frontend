import { ArrowForward, } from "@mui/icons-material"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback, useMemo } from "react"
import useSessionContext from "hooks/useSessionContext"
import { renderText } from "utils/text"
import CustomDataGrid from "components/generic/CustomDataGrid"
import IconButton from "components/generic/IconButton"

function CoursesDataTable({ courses = [] }) {
    const { translate } = useLocaleContext()
    const { organization } = useSessionContext()
    const { go } = useNavigate()

    const navigateToCourse = useCallback((courseId) => {
        go(renderText(PATHS.DASHBOARD_COURSE, { organizationShortId: organization.shortId, courseId }))
    }, [go, organization])

    const navigateToCreateCourse = useCallback(() => {
        go(renderText(PATHS.DASHBOARD_COURSE_CREATE, { organizationShortId: organization.shortId }))
    }, [go, organization])

    const columns = useMemo(() => {
        return [
            { field: 'name', flex: 1, headerName: translate(TEXTS.COURSE_NAME_LABEL) },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: (data) => {
                    return [
                        <IconButton size={'small'} tooltip={translate(TEXTS.GO_COURSE)} key={`go-course-${data.id}`} onClick={() => {
                            navigateToCourse(data.id)
                        }}><ArrowForward fontSize="inherit"></ArrowForward></IconButton>
                    ]
                }
            }
        ]
    }, [translate, navigateToCourse])

    return <CustomDataGrid rows={courses} columns={columns} onClickAdd={navigateToCreateCourse}></CustomDataGrid>
}

export default CoursesDataTable