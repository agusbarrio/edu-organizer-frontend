import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useMemo } from "react"
import CustomDataGrid from "components/generic/CustomDataGrid"
import StudentAvatarWithPreview from "components/dataDisplay/StudentAvatarWithPreview"
import { Stack, Typography } from "@mui/material"
import { Check, CheckCircle } from "@mui/icons-material"


function AttendanceStudentsTable({ students = [], ...props }) {
    const { translate } = useLocaleContext()

    const columns = useMemo(() => {
        return [
            {
                field: 'avatar',
                width: 72,
                minWidth: 72,
                maxWidth: 72,
                resizable: false,
                sortable: false,
                filterable: false,
                align: 'center',
                headerAlign: 'center',
                headerName: translate(TEXTS.STUDENT_AVATAR_LABEL),
                renderCell: ({ row }) => <StudentAvatarWithPreview row={row} size={40} />,
            },
            { field: 'firstName', flex: 1, minWidth: 120, headerName: translate(TEXTS.STUDENT_FIRST_NAME_LABEL) },
            { field: 'lastName', flex: 1, minWidth: 120, headerName: translate(TEXTS.STUDENT_LAST_NAME_LABEL) },
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