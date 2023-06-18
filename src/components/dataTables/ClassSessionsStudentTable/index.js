import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import TotalPoints from "./components/TotalPoints"
import useGetPoints from "./hooks/useGetPoints"


function ClassSessionsStudentTable({ classSessionsStudent = [] }) {
    const { translate } = useLocaleContext()

    const { getPoints } = useGetPoints()
    const columns = useMemo(() => {
        return [
            {
                field: 'course',
                flex: 1,
                headerName: translate(TEXTS.STUDENT_COURSE_LABEL),
                valueGetter: ({ row }) => row?.classSession?.course?.name
            },
            {
                field: 'date',
                flex: 1,
                type: 'date',
                headerName: translate(TEXTS.CLASS_SESSION_DATE_LABEL),
                valueGetter: ({ row }) => new Date(row?.classSession?.date)
            },
            {
                field: 'isPresent',
                flex: 1,
                type: 'boolean',
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_IS_PRESENT_LABEL),
                valueGetter: ({ row }) => row?.isPresent
            },
            {
                field: 'pointsAcumulated',
                flex: 1,
                type: 'number',
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_POINTS_ACUMULATED_LABEL),
                valueGetter: ({ row }) => getPoints(row),
            },

        ]
    }, [translate, getPoints])

    return <CustomDataGrid
        rows={classSessionsStudent}
        columns={columns}
        slotProps={{
            footer: {
                components: [TotalPoints]
            }
        }}
    ></CustomDataGrid>
}

export default ClassSessionsStudentTable