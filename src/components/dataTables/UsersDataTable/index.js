import { Check, Close, } from "@mui/icons-material"
import CORE_TEXTS from "constants/CORE_TEXTS"

import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import IconButton from "components/generic/IconButton"
import USER_STATUSES from "constants/USER_STATUSES"
import useDenyRegistrationService from "services/users/useDenyRegistrationService"
import useAllowRegistrationService from "services/users/useAllowRegistrationService"
import _ from "lodash"

function UsersDataTable({ users = [], onAllowRegistration, onDenyRegistration }) {
    const { translate } = useLocaleContext()

    const { denyRegistration } = useDenyRegistrationService()
    const { allowRegistration } = useAllowRegistrationService()

    const columns = useMemo(() => {
        return [
            { field: 'firstName', flex: 1, headerName: translate(TEXTS.USER_FIRST_NAME_LABEL) },
            { field: 'lastName', flex: 1, headerName: translate(TEXTS.USER_LAST_NAME_LABEL) },
            { field: 'email', flex: 1, headerName: translate(TEXTS.USER_EMAIL_LABEL) },
            { field: 'status', flex: 1, headerName: translate(TEXTS.USER_STATUS_LABEL), valueGetter: ({ row }) => translate(TEXTS[`USER_STATUS_${row.status}`]) },
            { field: 'organization', flex: 1, headerName: translate(TEXTS.USER_ORGANIZATION_LABEL), valueGetter: ({ row }) => row.organization.name },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: ({ row }) => {
                    const actions = []
                    if (row.status === USER_STATUSES.PENDING) {
                        actions.push(<IconButton
                            size={'small'}
                            color="primary"
                            tooltip={translate(TEXTS.ALLOW_REGISTRATION)}
                            key={`allow-${row.id}`}
                            onClick={async () => {
                                const result = await allowRegistration(row.id)
                                if (result && _.isFunction(onAllowRegistration)) {
                                    onAllowRegistration()
                                }
                            }}
                        ><Check fontSize="inherit"></Check></IconButton>)
                        actions.push(<IconButton
                            size={'small'}
                            color="error"
                            tooltip={translate(TEXTS.DENY_REGISTRATION)}
                            key={`deny-${row.id}`}
                            onClick={async () => {
                                const result = await denyRegistration(row.id)
                                if (result && _.isFunction(onDenyRegistration)) {
                                    onDenyRegistration()
                                }
                            }}
                        ><Close fontSize="inherit"></Close></IconButton>)
                    }
                    return actions
                }
            }
        ]
    }, [translate, allowRegistration, denyRegistration, onAllowRegistration, onDenyRegistration])

    return <CustomDataGrid rows={users} columns={columns}></CustomDataGrid>
}

export default UsersDataTable