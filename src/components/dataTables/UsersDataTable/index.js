import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"

function UsersDataTable({ users = [] }) {
    const { translate } = useLocaleContext()

    const columns = useMemo(() => {
        return [
            { field: 'firstName', flex: 1, headerName: translate(TEXTS.USER_FIRST_NAME_LABEL) },
            { field: 'lastName', flex: 1, headerName: translate(TEXTS.USER_LAST_NAME_LABEL) },
            { field: 'email', flex: 1, headerName: translate(TEXTS.USER_EMAIL_LABEL) },
            { field: 'status', flex: 1, headerName: translate(TEXTS.USER_STATUS_LABEL), valueGetter: ({ row }) => translate(TEXTS[`USER_STATUS_${row.status}`]) },
            { field: 'organization', flex: 1, headerName: translate(TEXTS.USER_ORGANIZATION_LABEL), valueGetter: ({ row }) => row.organization.name },
        ]
    }, [translate])

    return <CustomDataGrid rows={users} columns={columns}></CustomDataGrid>
}

export default UsersDataTable