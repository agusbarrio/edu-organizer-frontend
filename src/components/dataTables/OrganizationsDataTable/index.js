import { Delete, } from "@mui/icons-material"
import CORE_TEXTS from "constants/CORE_TEXTS"

import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

import { useCallback, useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import _ from "lodash"
import useDeleteOrganizationService from "services/organizations/useDeleteOrganizationService"
import useModalContext from "hooks/useModalContext"
import ConfirmModal from "components/generic/modals/ConfirmModal"
import TableActionButton from "components/generic/TableActionButton"

function OrganizationsDataTable({ organizations = [], onDelete }) {
    const { translate } = useLocaleContext()

    const { deleteOrganization } = useDeleteOrganizationService()
    const { openModal } = useModalContext()

    const handleClickDeleteOrganization = useCallback((organizationId) => {
        openModal(ConfirmModal, {
            title: translate(TEXTS.DELETE_ORGANIZATION_MODAL_TITLE),
            textContent: translate(TEXTS.DELETE_ORGANIZATION_MODAL_CONTENT),
            onConfirm: async () => {
                const result = await deleteOrganization(organizationId)
                if (result && _.isFunction(onDelete)) {
                    onDelete()
                }
            }

        })
    }, [openModal, translate, deleteOrganization, onDelete])

    const columns = useMemo(() => {
        return [
            { field: 'name', flex: 1, headerName: translate(TEXTS.ORGANIZATION_NAME_LABEL) },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: ({ row }) => ([
                    <TableActionButton
                        color="error"
                        tooltip={translate(CORE_TEXTS.GENERIC_DELETE)}
                        key={`delete-${row.id}`}
                        onClick={() => handleClickDeleteOrganization(row.id)}
                        iconComponent={Delete}
                    />
                ])
            }
        ]
    }, [translate, handleClickDeleteOrganization])

    return <CustomDataGrid rows={organizations} columns={columns}></CustomDataGrid>
}

export default OrganizationsDataTable