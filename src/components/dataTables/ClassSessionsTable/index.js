import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"


function ClassSessionsTable({ classSessions = [] }) {
    const { translate } = useLocaleContext()

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
                valueGetter: ({ row }) => new Date(row?.date)
            },
        ]
    }, [translate])

    return <CustomDataGrid
        rows={classSessions}
        columns={columns}
    ></CustomDataGrid>
}

export default ClassSessionsTable