import CourseForm from "components/forms/CourseForm";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";

function SetCourseClassSessionsConfigStep({ state, send }) {

    const { translate } = useLocaleContext()


    return (
        <StepTemplate
            onClickBack={() => send('PREV')}
            onClickFinish={() => send('NEXT')}
            title={translate(TEXTS.SET_COURSE_CLASS_SESSIONS_CONFIG_TITLE)}
        >

        </StepTemplate>)
}

export default SetCourseClassSessionsConfigStep;