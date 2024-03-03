import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useService from "hooks/useService"
import useGetMyOrganizationService from "services/organization/useGetMyOrganizationService"
import { useCallback, useEffect } from "react"
import { Container } from "@mui/material"
import CORE_TEXTS from "constants/CORE_TEXTS"
import useNavigate from "hooks/useNavigate"
import PATHS from "constants/PATHS"
import OrganizationForm from "components/forms/OrganizationForm"
import useEditMyOrganizationService from "services/organization/useEditMyOrganizationService"


function EditMyOrganizationPage() {
    const { translate } = useLocaleContext()
    const { getMyOrganization } = useGetMyOrganizationService()
    const { editMyOrganization } = useEditMyOrganizationService()
    const { runService, loading, value: organization } = useService({ service: getMyOrganization, defaultValue: {} })
    const { goBack, go } = useNavigate()

    useEffect(() => {
        runService()
    }, [runService])

    const handleSubmit = useCallback(async (data) => {
        const result = await editMyOrganization(data)
        if (result) go(PATHS.DASHBOARD_MY_ORGANIZATION)
    }, [editMyOrganization, go])


    return (
        <DashboardTemplate
            title={translate(TEXTS.EDIT_MY_ORGANIZATION_PAGE_TITLE)}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack
            }}
            loading={loading}
        >
            <Container maxWidth={'md'}>
                <OrganizationForm onSubmit={handleSubmit} defaultValues={organization} templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_EDIT) } }}></OrganizationForm>
            </Container>
        </DashboardTemplate >

    )
}

export default EditMyOrganizationPage