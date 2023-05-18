import CourseForm from "components/forms/CourseForm";
import StepTemplate from "components/templates/StepTemplate";
import { useCallback, useRef } from "react";

function SetCourseDataStep({ state, send }) {
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
        <StepTemplate onClickNext={handleClickNext} >
            <CourseForm onSubmit={handleSubmit} templateProps={{ showSubmitButton: false }} innerRef={formRef} defaultValues={{ name: state.context.name }}></CourseForm>
        </StepTemplate>)
}

export default SetCourseDataStep;