import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import _ from "lodash"


function ClassSessionsStudentTable({ classSessionsStudent = [] }) {
    const { translate } = useLocaleContext()

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
                valueGetter: ({ row }) => {
                    let count = 0
                    if (!_.isEmpty(row?.metadata)) {
                        _.forEach(row?.metadata, (value) => {
                            if (value === true) {
                                count++
                            }
                        })
                    }
                    return count
                },
            },

        ]
    }, [translate])



    return <CustomDataGrid
        rows={classSessionsStudent}
        columns={columns}
    ></CustomDataGrid>
}

export default ClassSessionsStudentTable