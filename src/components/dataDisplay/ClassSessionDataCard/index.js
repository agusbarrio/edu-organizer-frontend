import Card from "components/generic/Card"
import LabelValue from "components/generic/LabelValue"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"


function ClassSessionDataCard({ classSession }) {
    const { translate } = useLocaleContext()

    return (
        <Card title={translate(TEXTS.CLASS_SESSION_DATA_CARD_TITLE)}>
            <LabelValue label={translate(TEXTS.CLASS_SESSION_DATE_LABEL)} value={classSession?.date}></LabelValue>
            <LabelValue label={translate(TEXTS.COURSE_LABEL)} value={classSession?.course?.name}></LabelValue>
        </Card >
    )
}

export default ClassSessionDataCard