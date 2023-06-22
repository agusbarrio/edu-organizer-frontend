import { ArrowForward, Delete, Edit, } from "@mui/icons-material"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback, useMemo } from "react"
import { renderText } from "utils/text"
import CustomDataGrid from "components/generic/CustomDataGrid"
import TableActionButton from "components/generic/TableActionButton"
import ConfirmModal from "components/generic/modals/ConfirmModal"
import useModalContext from "hooks/useModalContext"
import useDeleteStudentService from "services/students/useDeleteStudentService"

function StudentsDataTable({ students = [], onDelete }) {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { openModal } = useModalContext()
    const { deleteStudent } = useDeleteStudentService()

    const navigateToStudent = useCallback((studentId) => {
        go(renderText(PATHS.DASHBOARD_STUDENT, { studentId }))
    }, [go])

    const navigateToEditStudent = useCallback((studentId) => {
        go(renderText(PATHS.DASHBOARD_EDIT_STUDENT, { studentId }))
    }, [go])

    const handleClickDeleteStudent = useCallback((studentId) => {
        openModal(ConfirmModal, {
            title: translate(TEXTS.DELETE_STUDENT_MODAL_TITLE),
            textContent: translate(TEXTS.DELETE_STUDENT_MODAL_CONTENT),
            onConfirm: async () => {
                const result = await deleteStudent(studentId)
                if (result && _.isFunction(onDelete)) {
                    onDelete()
                }
            }

        })
    }, [openModal, translate, deleteStudent, onDelete])

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
                        <TableActionButton
                            color="error"
                            tooltip={translate(CORE_TEXTS.GENERIC_DELETE)}
                            key={`delete-student-${data.id}`}
                            iconComponent={Delete}
                            onClick={() => {
                                handleClickDeleteStudent(data.id)
                            }} />,
                        <TableActionButton
                            tooltip={translate(TEXTS.GO_EDIT_COURSE)}
                            key={`go-edit-${data.id}`}
                            onClick={() => {
                                navigateToEditStudent(data.id)
                            }}
                            iconComponent={Edit}
                        />,
                        <TableActionButton
                            color="primary"
                            tooltip={translate(TEXTS.GO_STUDENT)}
                            key={`go-student-${data.id}`}
                            iconComponent={ArrowForward}
                            onClick={() => { navigateToStudent(data.id) }}
                        />
                    ]
                }
            }
        ]
    }, [translate, navigateToStudent])

    return <CustomDataGrid rows={students} columns={columns}></CustomDataGrid>
}

export default StudentsDataTable