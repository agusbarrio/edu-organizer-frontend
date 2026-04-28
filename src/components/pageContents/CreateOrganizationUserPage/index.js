import { Container } from "@mui/material"
import OrganizationUserForm from "components/forms/OrganizationUserForm"
import DashboardTemplate from "components/templates/DashboardTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback, useMemo } from "react"
import useCreateOrganizationUserService from "services/users/useCreateOrganizationUserService"

function CreateOrganizationUserPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { createOrganizationUser } = useCreateOrganizationUserService()

    const handleSubmit = useCallback(async (data) => {
        const result = await createOrganizationUser(data)
        if (result) {
            go(PATHS.DASHBOARD_ORGANIZATION_USERS)
        }
    }, [createOrganizationUser, go])

    const defaultValues = useMemo(() => ({
        email: '',
        firstName: '',
        lastName: '',
        permissions: []
    }), [])

    return (
        <DashboardTemplate
            title={translate(TEXTS.CREATE_ORGANIZATION_USER_PAGE_TITLE)}
            backButtonProps={{
                children: translate(TEXTS.GO_BACK_ORGANIZATION_USERS),
                onClick: () => go(PATHS.DASHBOARD_ORGANIZATION_USERS)
            }}>
            <Container maxWidth={'md'}>
                <OrganizationUserForm
                    onSubmit={handleSubmit}
                    defaultValues={defaultValues}
                    templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_CREATE) } }}
                />
            </Container>
        </DashboardTemplate>
    )
}

export default CreateOrganizationUserPage
