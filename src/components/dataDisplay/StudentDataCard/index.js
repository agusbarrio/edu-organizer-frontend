import Card from "components/generic/Card"
import LabelValue from "components/generic/LabelValue"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"


function StudentDataCard({ student }) {
    const { translate } = useLocaleContext()

    return (
        <Card title={translate(TEXTS.STUDENT_DATA_CARD_TITLE)} >
            <LabelValue label={translate(TEXTS.STUDENT_ID_LABEL)} value={student.id}></LabelValue>
            <LabelValue label={translate(TEXTS.STUDENT_FIRST_NAME_LABEL)} value={student.firstName}></LabelValue>
            <LabelValue label={translate(TEXTS.STUDENT_LAST_NAME_LABEL)} value={student.lastName}></LabelValue>
        </Card >
    )
}

export default StudentDataCard