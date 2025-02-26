import StudentForm from "components/forms/StudentForm";
import Card from "components/generic/Card";
import CORE_TEXTS from "constants/CORE_TEXTS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useRef } from "react";


function NewStudentCard({ onSubmit }) {
    const formRef = useRef(null)
    const { translate } = useLocaleContext()
    const handleSubmitStudent = useCallback((data) => {
        if (onSubmit) onSubmit({
            firstName: data.firstName,
            lastName: data.lastName,
            courseId: data.courseId,
            avatarFileId: data.avatar?.id || null,
            birthDate: data.birthDate,
            additionalInfo: data.additionalInfo
        })
        if (formRef.current) formRef.current.reset()
    }, [onSubmit, formRef])

    return (
        <Card title={translate(TEXTS.COURSE_CREATE_STUDENT_CARD_TITLE)} help={translate(TEXTS.COURSE_CREATE_STUDENT_CARD_HELP)}>
            <StudentForm withCourse={false} onSubmit={handleSubmitStudent} templateProps={{ submitButtonProps: { children: translate(CORE_TEXTS.GENERIC_ADD) } }} size={"small"} ref={formRef} showFilesInput={false}></StudentForm>
        </Card>
    );
}

export default NewStudentCard