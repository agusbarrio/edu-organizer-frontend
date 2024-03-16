import LabelValue from "components/generic/LabelValue"
import useGetValue from "./hooks/useGetValue"
import { Stack } from "@mui/material"
import _ from "lodash"
import { useMemo } from "react"
function AttendanceStudentData({ metadata = {}, course }) {
    const studentAttendanceFormData = useMemo(() => {
        return course?.studentAttendanceFormData || []
    }, [course])
    const getValue = useGetValue(studentAttendanceFormData)

    return (
        <Stack spacing={1}>
            {_.map(metadata, (value, key) => {
                return <LabelValue key={key} label={key} value={getValue(value, key)}></LabelValue>
            })}
        </Stack>
    )
}

export default AttendanceStudentData