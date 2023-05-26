import { RemoveCircleOutline } from "@mui/icons-material";
import { List } from "@mui/material";
import StudentListItem from "components/dataDisplay/StudentListItem";
import InputForm from "components/forms/InputForm";
import StudentForm from "components/forms/StudentForm";
import Card from "components/generic/Card";

import IconButton from "components/generic/IconButton";
import CORE_TEXTS from "constants/CORE_TEXTS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useRef } from "react";


function NewInputCard({ onSubmit }) {
    const formRef = useRef(null)
    const { translate } = useLocaleContext()
    const handleSubmitInput = useCallback((data) => {
        if (onSubmit) onSubmit(data)
        if (formRef.current) formRef.current.reset()
    }, [onSubmit, formRef])

    return (
        <Card sx={{ width: '100%', height: '100%' }} cardContentProps={{ sx: { overflowY: 'auto' } }} title={translate(TEXTS.NEW_INPUT_CARD_TITLE)}>
            <InputForm onSubmit={handleSubmitInput} size="small" templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_ADD) } }} innerRef={formRef}></InputForm>
        </Card>
    );
}

export default NewInputCard