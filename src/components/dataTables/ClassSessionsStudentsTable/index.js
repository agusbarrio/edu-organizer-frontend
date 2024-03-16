import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useCallback, useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import TotalPoints from "./components/TotalPoints"
import useGetPoints from "./hooks/useGetPoints"
import TableActionButton from "components/generic/TableActionButton"
import CORE_TEXTS from "constants/CORE_TEXTS"
import { Check, Close, Search } from "@mui/icons-material"
import useModalContext from "hooks/useModalContext"
import AlertModal from "components/generic/modals/AlertModal"
import _ from "lodash"
import AttendanceStudentData from "components/dataDisplay/AttendanceStudentData"
import moment from "moment"


function ClassSessionsStudentsTable({ classSessionsStudents = [], showCourse = true, showStudent = true, showTotalPoints = true, showDate = true, showMonth = true, course }) {
    const { translate, formatDate } = useLocaleContext()
    const { getPoints } = useGetPoints(course)
    const { openModal } = useModalContext()

    const handleClickMetadata = useCallback((row) => {
        const empty = _.isEmpty(row)
        openModal(AlertModal, {
            title: translate(TEXTS.STUDENT_ATTENDANCE_DATA_MODAL_TITLE),
            children: <>{!empty && <AttendanceStudentData {...row} course={course}></AttendanceStudentData>}</>,
            textContent: empty ? translate(TEXTS.STUDENT_ATTENDANCE_DATA_MODAL_EMPTY_CONTENT) : null,
        }
        )
    }, [openModal, translate, course])

    const columns = useMemo(() => {
        const result = [

            {
                field: 'isPresent',
                type: 'boolean',
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_IS_PRESENT_LABEL),
                valueGetter: ({ row }) => row?.isPresent,
                renderCell: ({ row }) => row?.isPresent ? <Check color={'success'}></Check> : <Close color={'error'}></Close>,
                hideable: false
            },
            {
                field: 'pointsAcumulated',
                flex: 1,
                type: 'number',
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_POINTS_ACUMULATED_LABEL),
                valueGetter: ({ row }) => getPoints(row),
                renderCell: ({ value }) => value,
            },
            {
                field: 'actions',
                flex: 1,
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: ({ row }) => {
                    return [
                        <TableActionButton
                            color="primary"
                            key={`metadata-${row?.id}`}
                            tooltip={translate(TEXTS.CLASS_SESSION_STUDENT_VIEW_METADATA)}
                            onClick={() => handleClickMetadata(row)}
                            iconComponent={Search}
                        />
                    ]
                },
                hideable: false
            }
        ]
        if (showMonth) {
            result.unshift({
                field: 'month',
                flex: 1,
                type: 'singleSelect',
                headerName: translate(TEXTS.CLASS_SESSION_MONTH_LABEL),
                valueGetter: ({ row }) => {
                    const month = moment(row?.classSession?.date).month()
                    return month
                },
                valueFormatter: ({ value }) => {
                    const date = moment().month(value)
                    const formatted = formatDate(date, 'MMMM')
                    return formatted.charAt(0).toUpperCase() + formatted.slice(1)
                },
                valueOptions: Array.from({ length: 12 }, (v, i) => i).map((month) => {
                    const value = moment().month(month)
                    const valueFormatted = formatDate(value, 'MMMM')
                    const label = valueFormatted.charAt(0).toUpperCase() + valueFormatted.slice(1)
                    return {
                        value: month,
                        label
                    }
                }
                )
            })
        }
        if (showDate) {
            result.unshift({
                field: 'date',
                flex: 1,
                type: 'date',
                headerName: translate(TEXTS.CLASS_SESSION_DATE_LABEL),
                valueGetter: ({ row }) => moment(row?.classSession?.date),
                valueFormatter: ({ value }) => formatDate(value),
                hideable: false
            })
        }
        if (showCourse) {
            result.unshift({
                field: 'course',
                flex: 1,
                headerName: translate(TEXTS.COURSE_LABEL),
                valueGetter: ({ row }) => row?.classSession?.course?.name,
                hideable: false
            })
        }
        if (showStudent) {
            result.unshift({
                field: 'student',
                flex: 1,
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_STUDENT_LABEL),
                valueGetter: ({ row }) => `${row?.student?.firstName} ${row?.student?.lastName}`,
                hideable: false
            })
        }
        return result
    }, [translate, getPoints, showCourse, showStudent, handleClickMetadata, formatDate, showDate, showMonth])

    const slotProps = useMemo(() => {
        const result = {}
        if (showTotalPoints) {
            result.footer = {
                components: [{
                    render: TotalPoints,
                    props: { course }
                }],

            }
        }
        return result
    }, [showTotalPoints, course])

    return <CustomDataGrid
        rows={classSessionsStudents}
        columns={columns}
        slotProps={slotProps}
    ></CustomDataGrid>
}

export default ClassSessionsStudentsTable