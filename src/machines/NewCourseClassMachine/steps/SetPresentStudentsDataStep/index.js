import StudentsDataTable from "components/dataTables/StudentsDataTable";
import AttendanceCourseForm from "components/forms/AttendanceCourseForm";
import Card from "components/generic/Card";
import CardsContainer from "components/generic/CardsContainer";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useMemo, useState } from "react";

function SetPresentStudentsDataStep({ state, send }) {
    const { translate } = useLocaleContext()

    const presentStudents = useMemo(() => state.context.students.filter(student => state.context.presentStudentsIds.includes(student.id)), [state.context.students, state.context.presentStudentsIds])

    const handleClickNext = useCallback(() => {
        send('NEXT', {})
    }, [send,])

    const handleClickBack = useCallback(() => {
        send('PREV', {})
    }, [send,])


    return (
        <StepTemplate onClickNext={handleClickNext} onClickBack={handleClickBack} title={translate(TEXTS.SELECT_PRESENT_STUDENTS_TITLE)}>
            <CardsContainer columnWidth="minmax(15rem, 1fr)">
                {presentStudents.map(student => <Card key={student.id} title={`${student.firstName} ${student.lastName}`} sx={{ height: 'auto' }}><AttendanceCourseForm></AttendanceCourseForm></Card>)}
            </CardsContainer>
        </StepTemplate>)
}

export default SetPresentStudentsDataStep;