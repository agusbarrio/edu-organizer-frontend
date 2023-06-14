import AttendanceStudentsTable from "components/dataTables/AttendanceStudentsTable";
import StudentsDataTable from "components/dataTables/StudentsDataTable";
import CourseForm from "components/forms/CourseForm";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useModalContext from "hooks/useModalContext";
import _ from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function SelectPresentStudentsStep({ state, send }) {
    const { translate } = useLocaleContext()
    const { confirm } = useModalContext()
    const [presentStudentsIds, setPresentStudentsIds] = useState(state.context.presentStudentsIds);

    const isEmpty = useMemo(() => _.isEmpty(presentStudentsIds), [presentStudentsIds])

    const handleClickNext = useCallback(() => {
        if (isEmpty) {
            confirm({
                title: translate(TEXTS.NO_PRESENT_STUDENTS_CONFIRM_TITLE),
                textContent: translate(TEXTS.NO_PRESENT_STUDENTS_CONFIRM_DESCRIPTION),
                onConfirm: () => send('NEXT', { presentStudentsIds })
            })
        } else {
            send('NEXT', { presentStudentsIds })
        }
    }, [send, presentStudentsIds, confirm, translate, isEmpty])

    const stepProps = useMemo(() => {
        if (isEmpty) {
            return { onClickFinish: handleClickNext }
        } else {
            return { onClickNext: handleClickNext }
        }
    }, [isEmpty, handleClickNext])

    return (
        <StepTemplate {...stepProps} title={translate(TEXTS.SELECT_PRESENT_STUDENTS_TITLE)}>
            <AttendanceStudentsTable students={state.context.students} rowSelectionModel={presentStudentsIds} onRowSelectionModelChange={(newSelection) => {
                setPresentStudentsIds(newSelection);
            }} ></AttendanceStudentsTable>
        </StepTemplate>)
}

export default SelectPresentStudentsStep;