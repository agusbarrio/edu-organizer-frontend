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

function StudentsDataTable({ students = [] }) {
    const { translate } = useLocaleContext()
    const { organization } = useSessionContext()
    const { go } = useNavigate()

    const navigateToStudent = useCallback((studentId) => {
        go(renderText(PATHS.DASHBOARD_STUDENT, { organizationShortId: organization.shortId, studentId }))
    }, [go, organization])

    const navigateToCreateStudent = useCallback(() => {
        go(renderText(PATHS.DASHBOARD_STUDENT_CREATE, { organizationShortId: organization.shortId }))
    }, [go, organization])

    const columns = useMemo(() => {
        return [
            { field: 'firstName', flex: 1, headerName: translate(TEXTS.STUDENT_FIRST_NAME_LABEL) },
            { field: 'lastName', flex: 1, headerName: translate(TEXTS.STUDENT_LAST_NAME_LABEL) },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: (data) => {
                    return [
                        <IconButton size={'small'} tooltip={translate(TEXTS.GO_STUDENT)} key={`go-student-${data.id}`} onClick={() => {
                            navigateToStudent(data.id)
                        }}><ArrowForward fontSize="inherit"></ArrowForward></IconButton>
                    ]
                }
            }
        ]
    }, [translate, navigateToStudent])

    return <CustomDataGrid rows={students} columns={columns} onClickAdd={navigateToCreateStudent}></CustomDataGrid>
}

export default StudentsDataTable