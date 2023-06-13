import Card from "components/generic/Card"
import LabelValue from "components/generic/LabelValue"
import Link from "components/generic/Link"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

import { renderText } from "utils/text"

function CourseDataCard({ course }) {
    const { translate } = useLocaleContext()
    const url = `${window.location.origin}${renderText(PATHS.COURSE_LOGIN, { shortId: course?.shortId })}`

    return (
        <Card title={translate(TEXTS.COURSE_DATA_CARD_TITLE)} >
            <LabelValue variant={'body1'} label={translate(TEXTS.COURSE_NAME_LABEL)} value={course?.name}></LabelValue>
            {course?.accessPin && <>
                <LabelValue variant={'body1'} label={translate(TEXTS.COURSE_ACCESS_PIN_LABEL)} value={course?.accessPin}></LabelValue>
                <LabelValue variant={'body1'} label={translate(TEXTS.COURSE_URL_LABEL)} value={<Link href={url}>{url}</Link>} valueProps={{ sx: { overflowWrap: 'anywhere', } }}></LabelValue>
            </>}
        </Card >
    )
}

export default CourseDataCard