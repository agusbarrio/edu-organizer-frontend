import InputForm from "components/forms/InputForm";
import Card from "components/generic/Card";
import CORE_TEXTS from "constants/CORE_TEXTS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useRef } from "react";


function NewInputCard({ onSubmit, allowPoints }) {
    const formRef = useRef(null)
    const { translate } = useLocaleContext()

    const handleSubmitInput = useCallback((data) => {
        if (onSubmit) onSubmit(data)
        if (formRef.current) {
            formRef.current.reset({
                name: '',
                type: '',
            })
            formRef.current.handleChangeType(null)
        }
    }, [onSubmit, formRef])

    return (
        <Card title={translate(TEXTS.NEW_INPUT_CARD_TITLE)} cardContentProps={{ sx: { overflowY: 'scroll' } }}>
            <InputForm onSubmit={handleSubmitInput} size="small" templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_ADD) } }} ref={formRef} allowPoints={allowPoints}></InputForm>
        </Card>
    );
}

export default NewInputCard