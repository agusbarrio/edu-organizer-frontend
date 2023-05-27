import InputForm from "components/forms/InputForm";
import Card from "components/generic/Card";
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
        <Card title={translate(TEXTS.NEW_INPUT_CARD_TITLE)}>
            <InputForm onSubmit={handleSubmitInput} size="small" templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_ADD) } }} innerRef={formRef}></InputForm>
        </Card>
    );
}

export default NewInputCard