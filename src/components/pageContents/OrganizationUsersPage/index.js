import { ArrowForward } from "@mui/icons-material"
import OrganizationUsersDataTable from "components/dataTables/OrganizationUsersDataTable"
import DashboardTemplate from "components/templates/DashboardTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useSessionContext from "hooks/useSessionContext"
import useService from "hooks/useService"
import { useCallback, useEffect } from "react"
import useDeleteOrganizationUserService from "services/users/useDeleteOrganizationUserService"
import useEditOrganizationUserPermissionsService from "services/users/useEditOrganizationUserPermissionsService"
import useGetOrganizationUsersService from "services/users/useGetOrganizationUsersService"
import useResendOrganizationUserInvitationService from "services/users/useResendOrganizationUserInvitationService"

function OrganizationUsersPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { getOrganizationUsers } = useGetOrganizationUsersService()
    const { deleteOrganizationUser } = useDeleteOrganizationUserService()
    const { resendOrganizationUserInvitation } = useResendOrganizationUserInvitationService()
    const { editOrganizationUserPermissions } = useEditOrganizationUserPermissionsService()
    const { userSession: { user: currentUser } } = useSessionContext()
    const { value: users, runService, loading } = useService({ service: getOrganizationUsers, defaultValue: [] })

    useEffect(() => {
        runService()
    }, [runService])

    const handleDeleteUser = useCallback(async (userId) => {
        const result = await deleteOrganizationUser(userId)
        if (result) {
            runService()
        }
    }, [deleteOrganizationUser, runService])

    const handleResendInvitation = useCallback(async (userId) => {
        const result = await resendOrganizationUserInvitation(userId)
        if (result) {
            runService()
        }
    }, [resendOrganizationUserInvitation, runService])

    const handleEditPermissions = useCallback(async ({ userId, permissions }) => {
        const result = await editOrganizationUserPermissions({ userId, permissions })
        if (result) {
            runService()
        }
    }, [editOrganizationUserPermissions, runService])

    return (
        <DashboardTemplate
            title={translate(TEXTS.ORGANIZATION_USERS_PAGE_TITLE)}
            subtitle={translate(TEXTS.ORGANIZATION_USERS_PAGE_SUBTITLE)}
            rightButtonProps={{
                endIcon: <ArrowForward></ArrowForward>,
                children: translate(CORE_TEXTS.GENERIC_CREATE),
                onClick: () => go(PATHS.DASHBOARD_ORGANIZATION_USERS_CREATE)
            }}
            loading={loading}
        >
            <OrganizationUsersDataTable
                users={users}
                onDeleteUser={handleDeleteUser}
                canDeleteUser={(user) => !(user.permissions || []).some((permission) => permission.permission === USER_PERMISSIONS.OWNER)}
                onResendInvitation={handleResendInvitation}
                canResendInvitation={(user) => user.status !== 'ACTIVE'}
                onEditPermissions={handleEditPermissions}
                canEditPermissions={(user) => {
                    const isTargetOwner = (user.permissions || []).some((permission) => permission.permission === USER_PERMISSIONS.OWNER)
                    const isCurrentOwner = (currentUser?.permissions || []).includes(USER_PERMISSIONS.OWNER)
                    const isSelf = user.id === currentUser?.id
                    if (isTargetOwner) {
                        return isCurrentOwner && isSelf
                    }
                    return true
                }}
            />
        </DashboardTemplate>
    )
}

export default OrganizationUsersPage
