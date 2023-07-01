import AttendanceStudentsTable from "components/dataTables/AttendanceStudentsTable";
import ControllerInput from "components/generic/ControllerInput";
import DateInput from "components/generic/DateInput";
import Form from "components/generic/Form";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useDate from "hooks/useDate";
import useLocaleContext from "hooks/useLocaleContext";
import useModalContext from "hooks/useModalContext";
import useValidator from "hooks/useValidator";
import _ from "lodash";
import { useCallback, useMemo, useRef, useState } from "react";

function SelectPresentStudentsStep({ state, send }) {
    const { translate } = useLocaleContext()
    const { getNow } = useDate()
    const { confirm } = useModalContext()
    const { form, date } = useValidator()
    const [presentStudentsIds, setPresentStudentsIds] = useState(state.context.presentStudentsIds);
    const formRef = useRef(null)
    const isEmpty = useMemo(() => _.isEmpty(presentStudentsIds), [presentStudentsIds])

    const handleClickNext = useCallback(() => {
        if (formRef.current) formRef.current.submit()
    }, [])

    const stepProps = useMemo(() => {
        if (isEmpty) {
            return { onClickFinish: handleClickNext }
        } else {
            return { onClickNext: handleClickNext }
        }
    }, [isEmpty, handleClickNext])
    const schema = useMemo(() => form({
        date: date({ required: { value: true }, max: { value: getNow() } })
    }), [form, date, getNow])

    const handleSubmit = useCallback(({ date }) => {
        if (isEmpty) {
            confirm({
                title: translate(TEXTS.NO_PRESENT_STUDENTS_CONFIRM_TITLE),
                textContent: translate(TEXTS.NO_PRESENT_STUDENTS_CONFIRM_DESCRIPTION),
                onConfirm: () => send('NEXT', { presentStudentsIds, date })
            })
        } else {
            send('NEXT', { presentStudentsIds, date })
        }
    }, [isEmpty, presentStudentsIds, send, confirm, translate])

    return (
        <StepTemplate {...stepProps} title={translate(TEXTS.SELECT_PRESENT_STUDENTS_TITLE)}>
            <Form schema={schema} defaultValues={{ date: state.context.date }} onSubmit={handleSubmit} templateProps={{ showSubmitButton: false }} ref={formRef}>
                <ControllerInput render={DateInput} name="date" label={translate(TEXTS.CLASS_SESSION_DATE_LABEL)}></ControllerInput>
                <AttendanceStudentsTable students={state.context.students} rowSelectionModel={presentStudentsIds} onRowSelectionModelChange={(newSelection) => {
                    setPresentStudentsIds(newSelection);
                }}></AttendanceStudentsTable>
            </Form>
        </StepTemplate>)
}

export default SelectPresentStudentsStep;