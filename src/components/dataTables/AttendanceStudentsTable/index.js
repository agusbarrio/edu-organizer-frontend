import { ArrowForward, } from "@mui/icons-material"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback, useMemo } from "react"
import { renderText } from "utils/text"
import CustomDataGrid from "components/generic/CustomDataGrid"
import IconButton from "components/generic/IconButton"
import Avatar from "components/dataDisplay/Avatar"


function AttendanceStudentsTable({ students = [], ...props }) {
    const { translate } = useLocaleContext()

    const columns = useMemo(() => {
        return [
            {
                field: 'avatar',
                flex: 1,
                headerName: translate(TEXTS.STUDENT_AVATAR_LABEL),
                renderCell: ({ row }) => {
                    return <Avatar src={row.avatar} alt={`${row.firstName} ${row.lastName}`}></Avatar>
                },
                filterable: false,
            },
            { field: 'firstName', flex: 1, headerName: translate(TEXTS.STUDENT_FIRST_NAME_LABEL) },
            { field: 'lastName', flex: 1, headerName: translate(TEXTS.STUDENT_LAST_NAME_LABEL) },
        ]
    }, [translate])

    return <CustomDataGrid rows={students} columns={columns} checkboxSelection rowSelection density="comfortable" {...props}></CustomDataGrid>
}

export default AttendanceStudentsTable