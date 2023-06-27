import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useCallback, useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import CORE_TEXTS from "constants/CORE_TEXTS"
import TableActionButton from "components/generic/TableActionButton"
import { Search } from "@mui/icons-material"

function ClassSessionStudentsTable({ classSessionStudents = [] }) {
    const { translate } = useLocaleContext()

    const handleClickMetadata = useCallback(() => {
        //TODO abrir modal de metadata
    }, [])

    const columns = useMemo(() => {
        return [
            {
                field: 'student',
                flex: 1,
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_STUDENT_LABEL),
                valueGetter: ({ row }) => `${row?.student?.firstName} ${row?.student?.lastName}`
            },
            {
                field: 'isPresent',
                flex: 1,
                type: 'boolean',
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_IS_PRESENT_LABEL),
                valueGetter: ({ row }) => row?.isPresent
            },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: (data) => {
                    return [
                        <TableActionButton
                            color="primary"
                            key={`metadata-${data.id}`}
                            tooltip={translate(TEXTS.CLASS_SESSION_STUDENT_VIEW_METADATA)}
                            onClick={handleClickMetadata}
                            iconComponent={Search}
                        />
                    ]
                }
            }
        ]
    }, [translate, handleClickMetadata])

    return <CustomDataGrid
        rows={classSessionStudents}
        columns={columns}
    ></CustomDataGrid>
}

export default ClassSessionStudentsTable