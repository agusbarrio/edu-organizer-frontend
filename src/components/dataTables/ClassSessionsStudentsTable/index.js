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


function ClassSessionsStudentsTable({ classSessionsStudents = [], showCourse = true, showStudent = true, showTotalPoints = true, showDate = true }) {
    const { translate, formatDate } = useLocaleContext()
    const { getPoints } = useGetPoints()
    const { openModal } = useModalContext()

    const handleClickMetadata = useCallback((metadata) => {
        const empty = _.isEmpty(metadata)
        openModal(AlertModal, {
            title: translate(TEXTS.STUDENT_ATTENDANCE_DATA_MODAL_TITLE),
            children: <>{!empty && <AttendanceStudentData data={metadata}></AttendanceStudentData>}</>,
            textContent: empty ? translate(TEXTS.STUDENT_ATTENDANCE_DATA_MODAL_EMPTY_CONTENT) : null,
        }
        )
    }, [openModal, translate])

    const columns = useMemo(() => {
        const result = [

            {
                field: 'isPresent',
                type: 'boolean',
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_IS_PRESENT_LABEL),
                valueGetter: ({ row }) => row?.isPresent,
                renderCell: ({ row }) => row?.isPresent ? <Check color={'success'}></Check> : <Close color={'error'}></Close>
            },
            {
                field: 'pointsAcumulated',
                flex: 1,
                type: 'number',
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_POINTS_ACUMULATED_LABEL),
                valueGetter: ({ row }) => getPoints(row),
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
                            onClick={() => handleClickMetadata(row?.metadata)}
                            iconComponent={Search}
                        />
                    ]
                }
            }
        ]
        if (showDate) {
            result.unshift({
                field: 'date',
                flex: 1,
                type: 'date',
                headerName: translate(TEXTS.CLASS_SESSION_DATE_LABEL),
                valueGetter: ({ row }) => new Date(row?.classSession?.date),
                valueFormatter: ({ value }) => formatDate(value)
            })
        }
        if (showCourse) {
            result.unshift({
                field: 'course',
                flex: 1,
                headerName: translate(TEXTS.COURSE_LABEL),
                valueGetter: ({ row }) => row?.classSession?.course?.name
            })
        }
        if (showStudent) {
            result.unshift({
                field: 'student',
                flex: 1,
                headerName: translate(TEXTS.CLASS_SESSION_STUDENT_STUDENT_LABEL),
                valueGetter: ({ row }) => `${row?.student?.firstName} ${row?.student?.lastName}`
            })
        }
        return result
    }, [translate, getPoints, showCourse, showStudent, handleClickMetadata, formatDate, showDate])

    const slotProps = useMemo(() => {
        const result = {}
        if (showTotalPoints) {
            result.footer = {
                components: [TotalPoints]
            }
        }
        return result
    }, [showTotalPoints])

    return <CustomDataGrid
        rows={classSessionsStudents}
        columns={columns}
        slotProps={slotProps}
    ></CustomDataGrid>
}

export default ClassSessionsStudentsTable