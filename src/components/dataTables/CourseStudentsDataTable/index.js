import CORE_TEXTS from "constants/CORE_TEXTS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import StudentAvatarWithPreview from "components/dataDisplay/StudentAvatarWithPreview"
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
            {
                field: 'avatar',
                width: 72,
                minWidth: 72,
                maxWidth: 72,
                resizable: false,
                sortable: false,
                filterable: false,
                align: 'center',
                headerAlign: 'center',
                headerName: translate(TEXTS.STUDENT_AVATAR_LABEL),
                renderCell: ({ row }) => <StudentAvatarWithPreview row={row} size={40} />,
            },
            { field: 'firstName', flex: 1, minWidth: 120, headerName: translate(TEXTS.STUDENT_FIRST_NAME_LABEL), hideable: false },
            { field: 'lastName', flex: 1, minWidth: 120, headerName: translate(TEXTS.STUDENT_LAST_NAME_LABEL), hideable: false },
            {
                field: 'birthDate',
                flex: 1,
                minWidth: 120,
                headerName: translate(TEXTS.STUDENT_BIRTH_DATE_LABEL),
                valueGetter: ({ row }) => row?.birthDate,
                valueFormatter: ({ value }) => formatCalendarDate(value),
            },
            {
                field: 'actions',
                type: 'actions',
                width: 64,
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: ({ id }) => ([
                    <EditIconButton key={`edit-${id}`} onClick={() => { go(resolveEditPath(id)) }} />
                ]),
                hideable: false
            }
        ]
    }, [go, translate, formatCalendarDate, resolveEditPath])

    return (
        <CustomDataGrid
            rows={students}
            columns={columns}
            density="comfortable"
        />
    )
}

export default CourseStudentsDataTable
