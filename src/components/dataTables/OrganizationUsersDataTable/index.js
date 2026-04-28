import { useCallback, useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import CORE_TEXTS from "constants/CORE_TEXTS"
import DeleteIconButton from "components/generic/DeleteIconButton"
import ConfirmModal from "components/generic/modals/ConfirmModal"
import useModalContext from "hooks/useModalContext"
import _ from "lodash"
import ResendInvitationIconButton from "components/generic/ResendInvitationIconButton"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import EditIconButton from "components/generic/EditIconButton"
import EditOrganizationUserPermissionsModal from "components/generic/modals/EditOrganizationUserPermissionsModal"

function OrganizationUsersDataTable({
    users = [],
    onDeleteUser,
    canDeleteUser = () => true,
    onResendInvitation,
    canResendInvitation = () => false,
    onEditPermissions,
    canEditPermissions = () => false
}) {
    const { translate } = useLocaleContext()
    const { openModal } = useModalContext()

    const handleDeleteUser = useCallback((userId) => {
        openModal(ConfirmModal, {
            title: translate(TEXTS.DELETE_ORGANIZATION_USER_MODAL_TITLE),
            textContent: translate(TEXTS.DELETE_ORGANIZATION_USER_MODAL_CONTENT),
            onConfirm: async () => {
                if (_.isFunction(onDeleteUser)) {
                    await onDeleteUser(userId)
                }
            }
        })
    }, [onDeleteUser, openModal, translate])

    const handleEditPermissions = useCallback((row) => {
        const defaultPermissions = (row.permissions || [])
            .map((permission) => permission.permission)
            .filter((permission) => permission !== 'OWNER')
        openModal(EditOrganizationUserPermissionsModal, {
            defaultPermissions,
            onConfirm: async ({ permissions }) => {
                if (_.isFunction(onEditPermissions)) {
                    await onEditPermissions({ userId: row.id, permissions })
                }
            }
        })
    }, [onEditPermissions, openModal])

    const columns = useMemo(() => {
        return [
            { field: 'firstName', flex: 1, headerName: translate(TEXTS.USER_FIRST_NAME_LABEL) },
            { field: 'lastName', flex: 1, headerName: translate(TEXTS.USER_LAST_NAME_LABEL) },
            { field: 'email', flex: 1, headerName: translate(TEXTS.USER_EMAIL_LABEL), hideable: false },
            { field: 'status', flex: 1, headerName: translate(TEXTS.USER_STATUS_LABEL), valueGetter: ({ row }) => translate(TEXTS[`USER_STATUS_${row.status}`]) },
            {
                field: 'permissions',
                flex: 1,
                headerName: translate(TEXTS.USER_PERMISSIONS_LABEL),
                valueGetter: ({ row }) => {
                    return (row.permissions || []).map((permission) => translate(TEXTS[`USER_PERMISSION_${permission.permission}`])).join(', ')
                }
            },
            {
                field: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                width: 120,
                sortable: false,
                filterable: false,
                hideable: false,
                renderCell: (data) => {
                    const actions = []
                    if (canEditPermissions(data.row)) {
                        actions.push(<EditIconButton key={`edit-permissions-${data.id}`} onClick={() => { handleEditPermissions(data.row) }} />)
                    }
                    if (canResendInvitation(data.row) && _.isFunction(onResendInvitation)) {
                        actions.push(<ResendInvitationIconButton key={`resend-${data.id}`} onClick={() => { onResendInvitation(data.id) }} />)
                    }
                    if (canDeleteUser(data.row)) {
                        actions.push(<DeleteIconButton key={`delete-${data.id}`} onClick={() => { handleDeleteUser(data.id) }} />)
                    }
                    return actions
                },
            }
        ]
    }, [canDeleteUser, canEditPermissions, canResendInvitation, handleDeleteUser, handleEditPermissions, onResendInvitation, translate])

    return <CustomDataGrid rows={users} columns={columns}></CustomDataGrid>
}

export default OrganizationUsersDataTable
