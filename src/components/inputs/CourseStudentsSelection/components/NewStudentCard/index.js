import { RemoveCircleOutline } from "@mui/icons-material";
import { List } from "@mui/material";
import StudentListItem from "components/dataDisplay/StudentListItem";
import StudentForm from "components/forms/StudentForm";
import Card from "components/generic/Card";

import IconButton from "components/generic/IconButton";
import CORE_TEXTS from "constants/CORE_TEXTS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useRef } from "react";


function NewStudentCard({ onSubmit }) {
    const formRef = useRef(null)
    const { translate } = useLocaleContext()
    const handleSubmitStudent = useCallback((data) => {
        if (onSubmit) onSubmit(data)
        if (formRef.current) formRef.current.reset()
    }, [onSubmit, formRef])

    return (
        <Card sx={{ width: '100%', height: '100%' }} cardContentProps={{ sx: { height: '100%' } }} variant="outlined" title={translate(TEXTS.COURSE_CREATE_STUDENT_CARD_TITLE)} help={translate(TEXTS.COURSE_CREATE_STUDENT_CARD_HELP)}>
            <StudentForm withCourse={false} onSubmit={handleSubmitStudent} templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_ADD) } }} size={"small"} innerRef={formRef}></StudentForm>
        </Card>
    );
}

export default NewStudentCard