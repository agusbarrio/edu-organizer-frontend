import AttendanceStudentsTable from "components/dataTables/AttendanceStudentsTable";
import StudentsDataTable from "components/dataTables/StudentsDataTable";
import CourseForm from "components/forms/CourseForm";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useEffect, useRef, useState } from "react";

function SelectPresentStudentsStep({ state, send }) {
    const { translate } = useLocaleContext()
    const [presentStudentsIds, setPresentStudentsIds] = useState(state.context.presentStudentsIds);

    const handleClickNext = useCallback(() => {
        send('NEXT', { presentStudentsIds })
    }, [send, presentStudentsIds])

    return (
        <StepTemplate onClickNext={handleClickNext} title={translate(TEXTS.SELECT_PRESENT_STUDENTS_TITLE)}>
            <AttendanceStudentsTable students={state.context.students} rowSelectionModel={presentStudentsIds} onRowSelectionModelChange={(newSelection) => {
                setPresentStudentsIds(newSelection);
            }} ></AttendanceStudentsTable>
        </StepTemplate>)
}

export default SelectPresentStudentsStep;