import CourseForm from "components/forms/CourseForm";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useRef } from "react";

function SetCourseDataStep({ state, send }) {
    const { translate } = useLocaleContext()
    const formRef = useRef(null)
    const handleClickNext = useCallback(() => {
        if (formRef?.current) {
            formRef.current.submit()
        }
    }, [formRef])

    const handleSubmit = useCallback(({ name, accessPin }) => {
        send('NEXT', { name, accessPin })
    }, [send])

    return (
        <StepTemplate onClickNext={handleClickNext} title={translate(TEXTS.SET_COURSE_DATA_TITLE)}>
            <CourseForm onSubmit={handleSubmit} templateProps={{ showSubmitButton: false }} innerRef={formRef} defaultValues={{ name: state.context.name }}></CourseForm>
        </StepTemplate>)
}

export default SetCourseDataStep;