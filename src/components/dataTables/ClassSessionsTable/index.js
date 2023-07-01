import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import CORE_TEXTS from "constants/CORE_TEXTS"
import DeleteIconButton from "components/generic/DeleteIconButton"
import EditIconButton from "components/generic/EditIconButton"
import ViewDetailsIconButton from "components/generic/ViewDetailsIconButton"
import useNavigate from "hooks/useNavigate"
import PATHS from "constants/PATHS"
import { renderText } from "utils/text"
import { useCallback } from "react"
import useModalContext from "hooks/useModalContext"
import ConfirmModal from "components/generic/modals/ConfirmModal"
import useDeleteClassSessionService from "services/classSessions/useDeleteClassSessionService"


function ClassSessionsTable({ classSessions = [], onDelete }) {
    const { translate, formatDate } = useLocaleContext()
    const { go } = useNavigate()
    const { openModal } = useModalContext()
    const { deleteClassSession } = useDeleteClassSessionService()
    const handleClickDelete = useCallback((classSessionId) => {
        openModal(ConfirmModal, {
            title: translate(TEXTS.DELETE_CLASS_SESSION_MODAL_TITLE),
            textContent: translate(TEXTS.DELETE_CLASS_SESSION_MODAL_CONTENT),
            onConfirm: async () => {
                const result = await deleteClassSession(classSessionId)
                if (result && _.isFunction(onDelete)) {
                    onDelete()
                }
            }

        })
    }, [onDelete, openModal, translate, deleteClassSession])

    const columns = useMemo(() => {
        return [
            {
                field: 'course',
                flex: 1,
                headerName: translate(TEXTS.COURSE_LABEL),
                valueGetter: ({ row }) => row?.course?.name
            },
            {
                field: 'date',
                flex: 1,
                type: 'date',
                headerName: translate(TEXTS.CLASS_SESSION_DATE_LABEL),
                valueGetter: ({ row }) => new Date(row?.date),
                valueFormatter: ({ value }) => formatDate(value)

            },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: (data) => {
                    return [
                        <DeleteIconButton key={`delete-${data.id}`} onClick={() => handleClickDelete(data.id)} />,
                        <EditIconButton key={`edit-${data.id}`} />,
                        <ViewDetailsIconButton key={`details-${data.id}`} onClick={() => go(renderText(PATHS.DASHBOARD_CLASS_SESSION, { classSessionId: data.id }))} />,
                    ]
                },
                filterable: false,
            }
        ]
    }, [translate, go, handleClickDelete, formatDate])

    return <CustomDataGrid
        rows={classSessions}
        columns={columns}
    ></CustomDataGrid>
}

export default ClassSessionsTable