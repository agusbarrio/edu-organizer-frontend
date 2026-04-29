import CORE_TEXTS from "constants/CORE_TEXTS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import EditIconButton from "components/generic/EditIconButton"
import PATHS from "constants/PATHS"
import { renderText } from "utils/text"

function CourseStudentsDataTable({ students = [], getEditStudentPath }) {
    const { translate, formatCalendarDate } = useLocaleContext()
    const { go } = useNavigate()

    const resolveEditPath = useMemo(
        () => getEditStudentPath ?? ((studentId) => renderText(PATHS.COURSE_EDIT_STUDENT, { studentId })),
        [getEditStudentPath]
    )

    const columns = useMemo(() => {
        return [
            { field: 'firstName', flex: 1, headerName: translate(TEXTS.STUDENT_FIRST_NAME_LABEL), hideable: false },
            { field: 'lastName', flex: 1, headerName: translate(TEXTS.STUDENT_LAST_NAME_LABEL), hideable: false },
            {
                field: 'birthDate',
                flex: 1,
                headerName: translate(TEXTS.STUDENT_BIRTH_DATE_LABEL),
                valueGetter: ({ row }) => row?.birthDate,
                valueFormatter: ({ value }) => formatCalendarDate(value),
            },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: ({ id }) => ([
                    <EditIconButton key={`edit-${id}`} onClick={() => { go(resolveEditPath(id)) }} />
                ]),
                hideable: false
            }
        ]
    }, [go, translate, formatCalendarDate, resolveEditPath])

    return <CustomDataGrid rows={students} columns={columns}></CustomDataGrid>
}

export default CourseStudentsDataTable
