import LabelValue from "components/generic/LabelValue"
import useGetValue from "./hooks/useGetValue"
import { Stack } from "@mui/material"
import _ from "lodash"
function AttendanceStudentData({ data = {} }) {
    const getValue = useGetValue()
    return (
        <Stack spacing={1}>
            {_.map(data, (value, key) => {
                return <LabelValue key={key} label={key} value={getValue(value)}></LabelValue>
            })}
        </Stack>
    )
}

export default AttendanceStudentData