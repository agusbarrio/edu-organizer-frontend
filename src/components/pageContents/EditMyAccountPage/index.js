import DashboardTemplate from "components/templates/DashboardTemplate"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { Grid } from "@mui/material"
import CORE_TEXTS from "constants/CORE_TEXTS"
import useNavigate from "hooks/useNavigate"
import PATHS from "constants/PATHS"
import MyAccountForm from "components/forms/MyAccountForm"
import { useCallback, useEffect } from "react"
import useEditMyUserService from "services/user/useEditMyUserService"
import useService from "hooks/useService"
import useGetMyUserService from "services/user/useGetMyUserService"


function EditMyAccountPage() {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { editMyUser } = useEditMyUserService()
    const { getMyUser } = useGetMyUserService()
    const { runService, loading } = useService({ service: editMyUser })
    const { runService: getUser, loading: pageLoading, value: user } = useService({ service: getMyUser })

    useEffect(() => {
        getUser()
    }, [getUser])

    const handleSubmit = useCallback(async (values) => {
        const result = await runService(values)
        if (result) go(PATHS.MY_ACCOUNT)
    }, [go, runService])
    return (
        <DashboardTemplate
            title={translate(TEXTS.EDIT_MY_ACCOUNT_PAGE_TITLE)}
            subtitle={translate(TEXTS.EDIT_MY_ACCOUNT_PAGE_SUBTITLE)}
            loading={pageLoading}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: () => go(PATHS.MY_ACCOUNT),
            }}
        >
            <Grid container spacing={2} sx={{ overflowY: 'auto', maxHeight: '100%' }}>
                <Grid item xs={12} md={6} >
                    <MyAccountForm onSubmit={handleSubmit} templateProps={{ submitButtonProps: { disabled: loading } }} defaultValues={user}></MyAccountForm>
                </Grid>
            </Grid>
        </DashboardTemplate >

    )
}

export default EditMyAccountPage