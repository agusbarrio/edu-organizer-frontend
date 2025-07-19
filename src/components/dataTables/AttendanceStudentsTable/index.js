import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import Avatar from "components/dataDisplay/Avatar"
import { Stack, Typography } from "@mui/material"
import { Check, CheckCircle } from "@mui/icons-material"


function AttendanceStudentsTable({ students = [], ...props }) {
    const { translate } = useLocaleContext()

    const columns = useMemo(() => {
        return [
            {
                field: 'avatar',
                flex: 1,
                headerName: translate(TEXTS.STUDENT_AVATAR_LABEL),
                renderCell: ({ row }) => {
                    return <Avatar src={row.avatar?.file} alt={`${row.firstName} ${row.lastName}`}></Avatar>
                },
                filterable: false,
            },
            { field: 'firstName', flex: 1, headerName: translate(TEXTS.STUDENT_FIRST_NAME_LABEL) },
            { field: 'lastName', flex: 1, headerName: translate(TEXTS.STUDENT_LAST_NAME_LABEL) },
        ]
    }, [translate])

    return <CustomDataGrid rows={students} columns={columns} checkboxSelection rowSelection density="comfortable" slotProps={{
        toolbar: {
            children: (
                <Stack direction={'row'} spacing={1} alignItems={'center'} sx={{
                    px: 1,
                }}>
                    <Check color="primary" />
                    <Typography variant="body2" fontWeight={'bold'} color="primary">
                        {props.rowSelectionModel.length}
                    </Typography>
                </Stack>
            )

        }
    }} {...props}

    ></CustomDataGrid>
}

export default AttendanceStudentsTable