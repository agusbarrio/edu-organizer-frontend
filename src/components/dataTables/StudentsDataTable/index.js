import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback, useMemo } from "react"
import { renderText } from "utils/text"
import CustomDataGrid from "components/generic/CustomDataGrid"
import ConfirmModal from "components/generic/modals/ConfirmModal"
import useModalContext from "hooks/useModalContext"
import useDeleteStudentService from "services/students/useDeleteStudentService"
import DeleteIconButton from "components/generic/DeleteIconButton"
import EditIconButton from "components/generic/EditIconButton"
import ViewDetailsIconButton from "components/generic/ViewDetailsIconButton"

function StudentsDataTable({ students = [], onDelete, deleteAllowed = true, editAllowed = true }) {
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
            { field: 'firstName', flex: 1, headerName: translate(TEXTS.STUDENT_FIRST_NAME_LABEL), hideable: false },
            { field: 'lastName', flex: 1, headerName: translate(TEXTS.STUDENT_LAST_NAME_LABEL), hideable: false },
            { field: 'birthDate', flex: 1, headerName: translate(TEXTS.STUDENT_BIRTH_DATE_LABEL) },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: (data) => {
                    const actions = [<ViewDetailsIconButton key={`details-${data.id}`} onClick={() => { navigateToStudent(data.id) }} />]
                    if (editAllowed) {
                        actions.unshift(<EditIconButton key={`edit-${data.id}`} onClick={() => { navigateToEditStudent(data.id) }} />)
                    }
                    if (deleteAllowed) {
                        actions.unshift(<DeleteIconButton key={`delete-${data.id}`} onClick={() => { handleClickDeleteStudent(data.id) }} />)
                    }
                    return actions
                },
                hideable: false
            }
        ]
    }, [translate, navigateToStudent, handleClickDeleteStudent, navigateToEditStudent, deleteAllowed, editAllowed])

    return <CustomDataGrid rows={students} columns={columns}></CustomDataGrid>
}

export default StudentsDataTable